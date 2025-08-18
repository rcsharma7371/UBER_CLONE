const mongoose = require("mongoose");

function connectToDb() {
  // console.log("Connecting to MongoDB...", process.env.DB_CONNECT);
  
  mongoose
    .connect(process.env.DB_CONNECT)
    .then((res) => console.log("connected to mongodb"))
    .catch((err) =>
      console.log("something went wrong with connected to mongodb",err)
    );
}


module.exports = connectToDb; 