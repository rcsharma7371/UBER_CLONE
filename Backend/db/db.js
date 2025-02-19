const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then((res) => console.log("connected to mongodb"))
    .catch((err) =>
      console.log("something went wrong with connected to mongodb")
    );
}


module.exports = connectToDb; 