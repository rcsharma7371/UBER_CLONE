const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captainRoutes");
const cookieParser = require("cookie-parser");

connectToDb();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res) => {
  console.log("Req url ", req.method, req.url);
  console.log("Req body ", req.body);
});

app.get("/", (req, res) => {
  res.send("Welcome to Uber Clone API");
});

app.use("/users", userRoutes);
app.use("/captain", captainRoutes);

app.use("*", (req, res, next) => {
  // console.error("Error occurred:", err);
  res.status(401).json({ error: "Invalid URL" });
});

module.exports = app;
