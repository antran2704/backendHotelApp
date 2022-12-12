const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

mongoose.set("strictQuery", true);

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://antran:cunyeu1506@cluster0.mflf25c.mongodb.net/hotelApp?retryWrites=true&w=majority');
    console.log("connected database succesfully");
  } catch (error) {
    console.log(error, "connect database false");
  }
}

module.exports = { connect };
