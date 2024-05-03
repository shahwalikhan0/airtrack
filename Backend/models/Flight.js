const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    arrival_time: Timestamp,
    departure_time: Timestamp,
    destination:String,
    date:Date,
});

const FlightModel = mongoose.model('flight', FlightSchema);
module.exports = FlightModel;