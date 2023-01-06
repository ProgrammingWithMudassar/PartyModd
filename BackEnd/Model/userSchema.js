const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = Schema({
    username:{
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
    provider:{
        type: String,
        require: true 

    },
    picture:{
        type: String,
        require: true 

    }
},
{ timestamps: true }
)

module.exports = model('users', userSchema) 