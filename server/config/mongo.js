const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

function moongooseDB() {
  mongoose
    .connect(process.env.MONGO)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}

module.exports = moongooseDB;
