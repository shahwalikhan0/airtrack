const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    membership_id: Number,
    discount_percent: Number,
});

const DiscountModel = mongoose.model('discount', DiscountSchema);
module.exports = DiscountModel;