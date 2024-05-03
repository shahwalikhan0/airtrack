const mongoose = require('mongoose');

const LuggageSchema = new mongoose.Schema({
    passenger_id: Number,
    flight_id: Number,
});

const LuggageModel = mongoose.model('luggage', LuggageSchema);
module.exports = LuggageModel;