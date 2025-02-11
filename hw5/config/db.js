const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to Mongo db");
  } catch (err) {
    console.log("Error connecting to the database");
    process.exit(1);
  }
};

module.exports = connectDB;