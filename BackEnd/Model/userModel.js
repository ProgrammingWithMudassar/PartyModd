import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [35, "Name cannot exceed 35 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email."],
    validate: [validator.isEmail, "Please Enter Your Valid Email."],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password."],
    minLength: [8, "Password Should be greater than 8 characters"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

const userModel = new mongoose.model("User", userSchema);

export default userModel;
