const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blackListTokenModel = require("../models/blackListTokenModel");

module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    // console.log(token,"token");
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ success:false,message: "Unauthorized" });
    }
    // console.log(user,"user");
    

    const isTokenBlackListed = await blackListTokenModel.findOne({ token });
    if (isTokenBlackListed) {
      // console.log("token blacklisted");
      
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;

    return next();
  } catch (err) {
    console.log("error",err);
    
    return res.status(401).json({ message: "Unauthorized" });
  }
};
