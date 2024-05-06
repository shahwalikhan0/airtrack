const express = require("express");
const Inventory = require("../models/Inventory");
const router = express.Router();

router.get("/inventory", async (req, res) => {
  const inventory = await Inventory.find();
  if (!inventory) res.json({ success: false, message: "No Item found" });
  else res.json(inventory);
});

router.post("/addInventory", async (req, res) => {
  const { item_name, quantity } = req.body;
  const newInventory = new Inventory({ item_name, quantity });
  try {
    const inventory = await Inventory.findOne({ item_name });
    if (inventory) {
      return res.json({ success: false, message: "Item already exists" });
    }
    await newInventory.save();
    return res.json({ success: true, message: "Item added" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.put("/updateInventory/:id", async (req, res) => {
  try {
    const id = req.body.id;
    console.log(req.body);
    const inventory = await Inventory.findById(id);
    if (!inventory) {
      return res.json({ success: false, message: "No inventory found" });
    }
    await Inventory.updateOne({ _id: id }, req.body);
    return res.json({ success: true, message: "Inventory updated" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
