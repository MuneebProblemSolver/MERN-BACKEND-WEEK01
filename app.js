require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn"); // Assuming your database connection logic is in db/conn.js
const cors = require("cors");
const router = require("./Routes/router");
const PORT = process.env.PORT || 6010;
const mongoose = require('mongoose');

// Configure CORS to allow requests from the frontend origin specified in .env
const corsOptions = {
  origin: process.env.FRONTEND_ORIGIN, // Use environment variabl
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Origin", "Accept"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
};

app.use(cors(corsOptions)); // Apply CORS middleware with options

app.use(express.json());
app.use("/uploads", express.static("./uploads"));
app.use("/files", express.static("./public/files"));
mongoose.set('strictQuery', false);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at port no ${PORT}`);
});
