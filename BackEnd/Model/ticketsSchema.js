const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const ticketsSchema = Schema({
    type: {
        type: String,
        require: true,
        default: "Paid"
    },
    name: {
        type: String,
        requrie: true
    },
    section: {
        type: String
    },
    promoCode: {
        type: String
    },
    quantity: {
        type: Number
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