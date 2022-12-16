const mongoose = require('mongoose')

const {Schema, model } = mongoose;

const userSchema = Schema({
    displayName:{
        type: String,
        require: true 
    },
    email: {
        type: String,
        require: true 
    },
    password: {
        type: String,
        require: true 
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
},
{ timestamps: true }
)

module.exports = model('users', userSchema) 