const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const eventsSchema = Schema({
    status: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    organiser: {
        type: String,
        requrie: true
    },
    type: {
        type: Array
    },
    category: {
        type: Array
    },
    tags: {
        type: Array
    },
    location: {
        name: String,
        latitude: Number,
        longitude: Number

    },
    startDate: Date,
    endDate: Date,
    eventImage: {
        type: String,
        require: true
    },
    summary: {
        type: String
    },
    description: {
        type: String
    },
    eventImages: {
        type: Array
    },
    TicketId: {
        type: Array,
        default: [],
        requrie: true
    },
    eventView: {
        type: String,
        default: "Public"
    },
    publishedDateAndTime: {
        type: String
    }


},
    { timestamps: true }
)

module.exports = model('events', eventsSchema) 