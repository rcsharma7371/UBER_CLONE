const userModel = require("../models/userModel.js");
const userService = require("../services/userService.js");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blackListTokenModel.js");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    // check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // get the user details from the request body
    const { fullname, email, password } = req.body;

    // check if the user already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(401).json({ error: "Email or password is invalid" });
    }

    // hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // create new user if the user does not exist
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });
    // generate token
    const token = user?.generateAuthToken();
    return res.status(201).json({ success: true, token, user });
  } catch (error) {
    console.error("Error in register user controller:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  console.log("req received");

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  console.log("object");
  const token = user.generateAuthToken();
  res.cookie("token", token);

  return res
    .status(200)
    .json({ success: true, message: "Login successfully", token, user });
};

const getProfile = async (req, res) => {
  return res.status(200).json({ user: req.user });
};

const logout = async (req, res) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);
  if (token) {
    await blackListTokenModel.create({ token });
  }
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  logout,
};
