const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    date: Date,
    destination: String,
    departure: String,
    seats: Number,
    seats_remaining: Number,
    price: Number,
});

const FlightModel = mongoose.model('flight', FlightSchema);
module.exports = FlightModel;