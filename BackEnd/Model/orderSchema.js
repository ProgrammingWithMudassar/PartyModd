const mongoose = require('mongoose')

const {Schema, model } = mongoose;

const orderSchema = Schema({
    userID:{
        type: String,
    },
    username:{
        type: String,
    },
    eventName:{
        type: String,
    },
    ticketName:{
        type: String,
    },
    quantity:{
        type: Number,
    },
    email: {
        type: String,
    },
    price: {
        type: Number,
    },

    picture:{
        type: String,
    },
    status: {
        type: String,
        enum: ['Paid', 'Pending'],
        default: 'Pending',
      },
},
{ timestamps: true }
)

module.exports = model('order', orderSchema) 