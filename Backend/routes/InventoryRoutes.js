const express = require("express");
const Inventory = require("../models/Inventory");
const router = express.Router();

router.get("/inventory", async (req, res) => {
    const inventory = await Inventory.find();
    if (!inventory)
        res.json({ success: false, message: "No Item found" });
    else
        res.json(inventory);
    }
);

// router.post("/flight", async (req, res) => {
//     const { flightNumber, destination, departureAirport, departureTime, arrivalTime, price, seats } = req.body;
//     const flight = new Flight({ flightNumber, destination, departureAirport, departureTime, arrivalTime, price, seats });
//     await flight.save();
//     res.json({ success: true, message: "Flight added" });
//     }
// );

module.exports = router;