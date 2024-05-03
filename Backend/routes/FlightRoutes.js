const express = require("express");
const Flight = require("../models/Flight");
const router = express.Router();

router.get("/flight", async (req, res) => {
    const flights = await Flight.find();
    if (!flights)
        res.json({ success: false, message: "No flights found" });
    else
        res.json(flights);
    }
);

router.post("/flight", async (req, res) => {
    const { flightNumber, destination, departureAirport, departureTime, arrivalTime, price, seats } = req.body;
    const flight = new Flight({ flightNumber, destination, departureAirport, departureTime, arrivalTime, price, seats });
    await flight.save();
    res.json({ success: true, message: "Flight added" });
    }
);

module.exports = router;