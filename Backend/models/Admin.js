const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
});

const AdminModel = mongoose.model('admin', AdminSchema);
module.exports = AdminModel;