const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    passenger_id: String,
    flight_id: String,
});

const TicketModel = mongoose.model('ticket', TicketSchema);
module.exports = TicketModel;