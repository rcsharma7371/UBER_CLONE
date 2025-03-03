const { validationResult } = require("express-validator");
const captainModel = require("../models/captainModel");
const captainService = require("../services/captainService");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const hashPassword = await captainModel.hashPassword(password);
  console.log("hashPassword", hashPassword);
  

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicleType:vehicle.vehicleType
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ captain,  token});
};
