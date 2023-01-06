const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ticketsSchema = Schema({
    ticketImg: {
        type:String,
        require: true,

    },
    ticketType: {
        type: String,
        require: true,
        default: "Paid"
    },
    ticketName: {
        type: String,
        requrie: true
    },
    section: {
        type: String,
        require: true,
    },
    promoCode: {
        type: String
    },

    price: {
        type: String,
    },
    startDate: Date,
    endDate: Date,
    eventsID : {
        type: String,
        require: true
    }


},
    { timestamps: true }
)

module.exports = model('tickets', ticketsSchema) 