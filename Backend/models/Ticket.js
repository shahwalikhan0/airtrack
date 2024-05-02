const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    passenger_id: Number,
    flight_id: Number,
    price: Number,
});

const TicketModel = mongoose.model('ticket', TicketSchema);
module.exports = TicketModel;