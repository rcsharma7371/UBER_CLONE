const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be at least 3 characters long"],
      maxlength: [50, "Firstname must be at most 50 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Lastname must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters long"],
    maxlength: [255, "Email must be at most 255 characters long"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    maxlength: [1024, "Password must be at most 1024 characters long"],
  },
  socketId: {
    type: String,
  },
  status:{
    type:String,
    enum:['active','inactive'],
    default:'inactive'
  },
  vehicle:{
    color:{
        type:String,
        required:true,
        minlength:[3,"Color must be at least 3 characters long"],
    },
    plate:{
        type:String,
        required:true,
        minlength:[3,"Plate must be at least 3 characters long"],
    },
    capacity:{
        type:Number,
        required:true,
        minlength:[1,"Capacity must be at least 1 characters long"],
    },
    vehicleType:{
        type:String,
        enum:['car','motorcycle','auto'],
        required:true,
    }
  }, 
  location:{
    lat:{
      type:Number
    },
    long:{
      type:Number
    }
  }
});

captainSchema.methods.generateAuthToken = function () {
// JWT_SECRET = "Uber_clone";
const token = jwt.sign({_id:this.id},process.env.JWT_SECRET,{expiresIn:'1h'});

return token;
}

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}
const captainModel = mongoose.model("Captain", captainSchema);
module.exports = captainModel;