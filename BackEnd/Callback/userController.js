import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../Model/userModel.js";
import nodemailer from "nodemailer"

const Secrete_key = "##1234##sndanaghaihfaharyh89werg98";

export const Register = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "User Already Exist." });
    }
    const HashPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email: email, password: HashPassword }, Secrete_key, { expiresIn: "1h" } );
    const result = await userModel.create({
      email,
      password: HashPassword,
      name: name
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const LogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await userModel.findOne({ email });
    if (!email) return res.status(404).json({ message: "User don't Exist." });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Password Not Correct." });
    }
    const token = jwt.sign(
      { email: oldUser.emial, password: oldUser.password },
      "Secrete_key",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
