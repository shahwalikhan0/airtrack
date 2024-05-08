const express = require("express");
const MembershipRequest = require("../models/MembershipRequest");
const router = express.Router();

router.post("/membershipRequest", async (req, res) => {
    const { user_id } = req.body;
    const membershipRequest = new MembershipRequest({ user_id });
    await membershipRequest.save();
    res.json({ success: true, message: "Membership request sent" });
});

router.get("/membership", async (req, res) => {
    const membershipRequest = await MembershipRequest.find();
    if (!membershipRequest)
        res.json({ success: false, message: "No membership requests found" });
    else
        res.json(membershipRequest);
});

router.get("/membershipRequest/:id", async (req, res) => {
    const membershipRequest = await MembershipRequest.find({ user_id: req.params.id });
    if (membershipRequest.length == 0) {
        res.json({ success: false, message: "Sending membership request to the admin" });
    }
    else res.json({ success: true, message: "Already sent membership request" });
    }
);

router.delete("/membership/:id", async (req, res) => {
    try {
        const membershipRequest = await MembershipRequest.findById(req.params.id);
        if (!membershipRequest) {
            return res.json({ success: false, message: "No membership request found" });
        }
        await MembershipRequest.deleteOne({ _id: req.params.id });
        return res.json({ success: true, message: "Membership request deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;