const express = require('express');
const router = express.Router();
const Stripe = require('stripe')
const stripe = Stripe('sk_test_51LmVQ4EtvWEzIuymCjxY7y8ahmW9TTwLTQHp0SQKoh6gvcKD0FNaeyhuCDzp1icWKu0oU2uOiVmhEN9ozjA8oh5D00zExl7kZK')
const baseUrl = process.env.BASE_URL || `http://localhost:8000`
const Order = require('../model/orderSchema');


router.post('/create-checkout-session', async (req, res) => {
    const {
        ItemID,
        ticketImg,
        ticketName,
        price,
        user,
        quantity,
        eventName,
    } = req.body

    price === "Free" ? price = 0 : ""
    const customer = await stripe.customers.create({
        metadata: {
            userID: user._id,
            ticketName: ticketName,
            username: user.username,
            email: user.email,
            price: price,
            quantity: quantity,
            ticketImg: ticketImg,
            eventName: eventName
        }
    })
    console.log("CUSTOMER==>", customer)
    const session = await stripe.checkout.sessions.create({
        customer: customer.id,
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: ticketName,
                        images: [`${baseUrl}/Storage/${ticketImg}`],
                        metadata: {
                            id: ItemID
                        }
                    },
                    unit_amount: price,
                },
                quantity: quantity,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:5173/payment-success',
        cancel_url: 'http://localhost:5173/payment-cancel',
    });

    console.log("ypppps", session.url)



    res.send({ url: session.url });
});


const createOrder = async (customer, data) => {


    const order = new Order({
        userID: customer.metadata.userId,
        username: customer.metadata.username,
        email: customer.metadata.email,
        ticketName :customer.metadata.ticketName,
        price: data.amount_total,
        picture: customer.metadata.ticketImg,
        quantity: customer.metadata.quantity,
        eventName:  customer.metadata.eventName,
        status: 'Paid',
    });

    console.log("About to save order !!!");
    console.log("order saved !!!");
  
  
    try {
      const savedOrder = await order.save();
      console.log("Processed Order:", savedOrder);
    } catch (err) {
      console.log(err);
    }
  };

router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    let data;
    let eventType;

    // Check if webhook signing is configured.
    let webhookSecret;
    //webhookSecret = process.env.STRIPE_WEB_HOOK;

    if (webhookSecret) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers["stripe-signature"];

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed:  ${err}`);
        return res.sendStatus(400);
      }
      // Extract the object from the event.
      data = event.data.object;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the checkout.session.completed event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then(async (customer) => {
          try {
            // CREATE ORDER
            createOrder(customer, data)
          } catch (err) {
            console.log(err);
          }
        })
        .catch((err) => console.log(err.message));
    }

    res.status(200).end();
  }
);






module.exports = router;