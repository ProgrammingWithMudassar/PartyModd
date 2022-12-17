const mongoose = require('mongoose')

const {Schema, model } = mongoose;

const eventsSchema = Schema({
  
},
{ timestamps: true }
)

module.exports = model('events', eventsSchema) 