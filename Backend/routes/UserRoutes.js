const express = require("express");
const Passenger = require("../models/Passenger");
const Admin = require("../models/Admin");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password, admin } = req.body;

  if (admin) {
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  } else {
    const passenger = await Passenger.findOne({ username, password });
    if (passenger) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  }
});

router.post("/signup", async (req, res) => {
    const { name, email, username, passport, password } = req.body;
    const passenger = new Passenger({ name, email, username, passport, password });
    await passenger.save();
    res.json({ success: true, message: "Signup successful" });
    });

router.get("/passenger", async (req, res) => {
    const passengers = await Passenger.find();
    if (!passengers)
        res.json({ success: false, message: "No passengers found" });
    else
        res.json(passengers);
    }
);

module.exports = router;
