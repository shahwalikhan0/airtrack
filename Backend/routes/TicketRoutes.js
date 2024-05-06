const express = require("express");
const Ticket = require("../models/Ticket");
const router = express.Router();

router.get("/ticket", async (req, res) => {
    const ticket = await Ticket.find();
    if (!ticket)
        res.json({ success: false, message: "No Tickets found" });
    else
        res.json(ticket);
    }
);

//add ticket
router.put("/ticket", async (req, res) => {
    const { passenger_id,flight_id } = req.body;
    const ticket = new Ticket({ passenger_id,flight_id });
    await ticket.save();
    res.json({ success: true, message: "Ticket added" });
    }
);
module.exports = router;