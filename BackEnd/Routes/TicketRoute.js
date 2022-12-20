const express = require('express');
const router = express.Router();
const upload = require('../upload/upload');
const Ticket = require('../model/ticketsSchema');
const Events = require('../model/eventsSchema');


router.post('/create-ticket/:eventId', upload.fields([
    { name: 'ticketImage', maxCount: 1 },
]), async (req, res) => {

    const {
        ticketType,
        ticketName,
        section,
        promoCode,
        quantity,
        price,
        startDate,
        endDate,
    } = req.body;

    const EventParamsID = req.params.eventId
    const ticketImageName = req.files.ticketImage[0].filename

    console.log(ticketType, ticketName, section, promoCode, quantity, price, startDate, endDate, EventParamsID, ticketImageName)

    const ticketCreated = await Ticket.create({
        ticketType,
        ticketImg: ticketImageName,
        ticketName,
        section,
        promoCode,
        quantity,
        price,
        startDate,
        endDate,
        eventsID: EventParamsID
    })
    if (ticketCreated) {

        const ticketCreationID = ticketCreated._id.toString()

        currentEvent = await Events.findById(EventParamsID)

        console.log("original ticket array: ", currentEvent.TicketId);

        const newTicketsArray = [...currentEvent.TicketId]

        console.log("NewTicketsArray Before update", newTicketsArray)
        newTicketsArray.push(ticketCreationID)

        console.log("NewTicketsArray After update1", newTicketsArray)

        await Events.findByIdAndUpdate(EventParamsID, {TicketId:newTicketsArray })

        res.status(200).json({ status: true, message: "Ticket Created ✔ ", })

        
    }else{
        return res.status(500).json({ status: false, message: "Failed to create Ticket!!", error: err })
    }


    // if (ticketCreated) {
    //    
    // }
    //ticket post
    //get single event -> ticket ids array[]
    //append ticketid , in that array
    //update event and post ticket concurently 
    // 


})


module.exports = router;