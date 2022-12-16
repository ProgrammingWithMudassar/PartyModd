const mongoose = require('mongoose')
const { model } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter your email."],
  },
  password: {
    type: String,
    required: [true, "Please Enter password."],
  },
});

const UserModel = model("UserData", UserSchema);

module.exports = UserModel;