const mongoose = require('mongoose');

const MembershipRequestSchema = new mongoose.Schema({
    user_id: String,
});

const MembershipRequest = mongoose.model('MembershipRequest', MembershipRequestSchema);
module.exports = MembershipRequest;
