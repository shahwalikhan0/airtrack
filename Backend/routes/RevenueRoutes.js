const express = require("express");
const Revenue = require("../models/Revenue");
const router = express.Router();

router.get("/revenue", async (req, res) => {
    const revenue = await Revenue.find();
    if (!revenue)
        res.json({ success: false, message: "No Revenues found" });
    else
        res.json(revenue);
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