const express = require("express");
const Discount = require("../models/Discount");
const router = express.Router();

router.get("/coupon", async (req, res) => {
    const flights = await Discount.find();
    if (!flights)
        res.json({ success: false, message: "No Discount coupon found" });
    else
        res.json(flights);
    }
);

// router.post("/co", async (req, res) => {
//     const { flightNumber, destination, departureAirport, departureTime, arrivalTime, price, seats } = req.body;
//     const flight = new Flight({ flightNumber, destination, departureAirport, departureTime, arrivalTime, price, seats });
//     await flight.save();
//     res.json({ success: true, message: "Flight added" });
//     }
// );

module.exports = router;