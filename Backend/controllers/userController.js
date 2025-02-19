const userModel = require("../models/userModel");
const userService = require("../services/userService");
const BlackListToken = require("../models/blackListTokenModel");

const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blackListTokenModel");
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  console.log(req.body);
  const hashPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  // const isPasswordMatch = await userModel.comparePassword

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  if (isPasswordMatch) {
    const token = user.generateAuthToken();
    res.cookie('token',token)
    return res.status(200).json({ token, user }); 
  }
};

module.exports.getProfile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};

module.exports.logout = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blackListTokenModel.create({ token }); // Pass token as an object
  res.clearCookie('token');
  res.status(200).json({ message: "Logout successfully" });
};
