const express = require('express');
const router = express.Router();
const Order = require('../model/orderSchema');


router.delete('/delete-order/:orderId', async (req, res) => {

    const OrderParamsID = req.params.orderId;
  
     await Order.findByIdAndDelete(OrderParamsID)
    // console.log(eventFound)
    res.status(200).json({ status: true, message: "Order Deleted!! " })
  
  
})
  

router.get('/all-orders', async (req, res) => {
  const allOrders = await Order.find({});
  // console.log(allEvents);
  return res.status(200).json(allOrders);
})




module.exports = router;