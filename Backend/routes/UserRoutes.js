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
      res.json({
        success: true,
        message: "Login successful",
        passenger: passenger,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, username, passport, password } = req.body;
  const passenger = new Passenger({
    name,
    email,
    username,
    passport,
    password,
  });
  await passenger.save();
  res.json({ success: true, message: "Signup successful" });
});

router.get("/passenger", async (req, res) => {
  const passengers = await Passenger.find();
  if (!passengers) res.json({ success: false, message: "No passengers found" });
  else res.json(passengers);
});

router.delete("/removePassenger/:id", async (req, res) => {
  try {
    const passengers = await Passenger.findById(req.params.id);
    if (!passengers) {
      return res.json({ success: false, message: "No passengers found" });
    }
    await Passenger.deleteOne({ _id: req.params.id });
    return res.json({ success: true, message: "Passengers deleted" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.put("/grantMembership/:id", async (req, res) => {
  try {
    const passenger = await Passenger.findById(req.params.id);
    if (!passenger) {
      return res.json({ success: false, message: "No passengers found" });
    }
    passenger.isPrime = true;
    await passenger.save();
    return res.json({
      success: true,
      message: "Passenger is now a prime member",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.get("/passenger/:id", async (req, res) => {
  const passenger = await Passenger.findById(req.params.id);
  if (!passenger) res.json({ success: false, message: "No passengers found" });
  else res.json(passenger);
});

router.put("/passenger/:id", async (req, res) => {
  const { name, username, email, user_id } = req.body;
  console.log(req.body);
  const passenger = await Passenger.findById(req.params.id);
  if (!passenger) res.json({ success: false, message: "No passengers found" });
  else {
    if (name)
      passenger.name = name;
    if (username)
      passenger.username = username;
    if (email)
      passenger.email = email;
    if(user_id)
      passenger.isPrime = true;
    await passenger.save();
    res.json({ success: true, message: "Passenger updated", passenger });
  }
});

router.put("/passenger/updatePassword/:id", async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const passenger = await Passenger.findById(req.params.id);
  if (!passenger) res.json({ success: false, message: "No passengers found" });
  else {
    if (passenger.password !== oldPassword) {
      res.json({ success: false, message: "Old password is incorrect" });
    } else {
      passenger.password = newPassword;
      await passenger.save();
      res.json({ success: true, message: "Password updated" });
    }
  }
});
module.exports = router;
