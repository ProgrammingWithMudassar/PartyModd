import mongoose from "mongoose";

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

const UserModel = mongoose.model("UserData", UserSchema);

export default UserModel;