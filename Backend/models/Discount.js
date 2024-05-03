const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    discountCode:String,
    discount_percent: Number,
});

const DiscountModel = mongoose.model('discount', DiscountSchema);
module.exports = DiscountModel;