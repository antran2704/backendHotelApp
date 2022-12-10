const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/HotelApp');
        console.log("connected database succesfully")
    } catch (error) {
        console.log(error, "connect database false")

    }
}

module.exports = {connect};