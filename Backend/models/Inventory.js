const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    item_name: String,
    quantity: Number,
});

const InventoryModel = mongoose.model('inventory', InventorySchema);
module.exports = InventoryModel;