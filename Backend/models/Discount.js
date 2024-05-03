const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    discount_percent: Number,
    discountCode: String,
});

const DiscountModel = mongoose.model('discount', DiscountSchema);
module.exports = DiscountModel;