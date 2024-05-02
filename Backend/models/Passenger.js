const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    isPrime: Boolean,
    email: String,
    passportNumber: String
});

const PassengerModel = mongoose.model('passenger', PassengerSchema);
module.exports = PassengerModel;