const mongoose = require('mongoose');

const RevenueSchema = new mongoose.Schema({
    admin_id: Number,
    amount: Number,
    type: String,
    date: Date,
});

const RevenueModel = mongoose.model('revenue', RevenueSchema);
module.exports = RevenueModel;