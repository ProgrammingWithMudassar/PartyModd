const express = require('express');
const router = express.Router();
const upload = require('../upload/upload');
const Ticket = require('../model/ticketsSchema');
const Events = require('../model/eventsSchema');
const moment = require('moment')
//TASK
/*
    PubLish Event:
    1- event get by id
    2- Public and Private
    3- schedule
    4- get all events
*/

router.post('/create-ticket/:eventId', upload.fields([
    { name: 'ticketImage', maxCount: 1 },
]), async (req, res) => {
    try {
        const {
            ticketType,
            ticketName,
            section,
            promoCode,
            price,
            saleStartDate, saleStartTime,
            saleEndDate, saleEndTime
        } = req.body;
        console.log(saleStartDate, saleStartTime,
            saleEndDate, saleEndTime)

        const EventParamsID = req.params.eventId
        const ticketImageName = req.files.ticketImage[0].filename
        // console.log(ticketType, ticketName, section, promoCode, quantity, price, startDate, endDate, EventParamsID, ticketImageName)

        //FOR START
        // tell moment how to parse the input string
        var momentObj = moment(saleStartDate + saleStartTime, 'YYYY-MM-DDLT');

        // conversion
        var StartdateTime = momentObj.format('YYYY-MM-DDTHH:mm:s') + 0;
        console.log(StartdateTime);

        //FOR END
        // tell moment how to parse the input string
        var momentObj = moment(saleEndDate + saleEndTime, 'YYYY-MM-DDLT');

        // conversion
        var EnddateTime = momentObj.format('YYYY-MM-DDTHH:mm:s') + 0;
        console.log(EnddateTime);

        //converting string date to DATE FORMAT:
        let newStartDate = new Date(Date.parse(StartdateTime));
        let newEndDate = new Date(Date.parse(EnddateTime));


        console.log("NEW START", newStartDate);

        const ticketCreated = await Ticket.create({
            ticketType,
            ticketImg: ticketImageName,
            ticketName,
            section,
            promoCode,
            price,
            eventsID: EventParamsID,
            startDate: newStartDate,
            endDate: newEndDate

        })
        if (ticketCreated) {

            const ticketCreationID = ticketCreated._id.toString()

            currentEvent = await Events.findById(EventParamsID)
            console.log("original ticket array: ", currentEvent.TicketId);

            const newTicketsArray = [...currentEvent.TicketId]
            console.log("NewTicketsArray Before update", newTicketsArray)

            newTicketsArray.push(ticketCreationID)

            console.log("NewTicketsArray After update1", newTicketsArray)
            await Events.findByIdAndUpdate(EventParamsID, { TicketId: newTicketsArray })

            res.status(200).json({ status: true, message: "Ticket Created ✔ ", })


        }

        // if (ticketCreated) {
        //    
        // }
        //ticket post
        //get single event -> ticket ids array[]
        //append ticketid , in that array
        //update event and post ticket concurently 
        // 

    } catch (err) {
        return res.status(500).json({ status: false, message: "Failed to create Ticket!!", error: err })

    }

})

router.delete('/delete-ticket/:eventId', async (req, res) => {

    const EventParamsID = req.params.eventId;
  
    const eventFound = await Ticket.findByIdAndDelete(EventParamsID)
    console.log(eventFound)
    res.status(200).json({ status: true, message: "Ticket Deleted !!" })
  
  
  })

router.get('/single-ticket/:eventID', async (req, res) => {
    try {
        const eventParamsId = req.params.eventID;

        const ticketFound = await Ticket.find({ eventsID: eventParamsId })

        if (!ticketFound) {
            return res.status(500).json({ status: false, message: "Unable to found any ticket..." })
        } else {
            return res.status(200).send(ticketFound);
        }


    } catch (err) {
        return res.status(500).json({ status: false, message: "Unable to load", error: err })

    }

})


module.exports = router;