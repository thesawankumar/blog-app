import User from "../models/user.js";
import bcryptjs from "bcryptjs";
// import { errorHandler } from '../utils/error.js';
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  //   console.log(req.body);

  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // next(errorHandler(400, ));
    res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    next(error);
  }
};
