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

router.post("/addFlight", async (req, res) => {
  const { destination, departure, date, price, seats } = req.body;
  const flight = new Flight({ destination, departure, date, price, seats, seats_remaining: seats });
  await flight.save();
  res.json({ success: true, message: "Flight added" });
}
);

router.delete("/removeFlight/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.json({ success: false, message: "No flight found" });
    }
    await Flight.deleteOne({ _id: req.params.id });
    return res.json({ success: true, message: "Flight deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.put("/updateFlight/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      return res.status(404).json({ success: false, message: "Flight not found" });
    }

    flight.seats_remaining = flight.seats_remaining - 1;
   
    await flight.save();
    res.json({ success: true, message: "Flight updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error updating flight" });
  }
});

module.exports = router;