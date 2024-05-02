const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    admin_id: Number,
    item_name: String,
    quantity: Number,
});

const InventoryModel = mongoose.model('inventory', InventorySchema);
module.exports = InventoryModel;