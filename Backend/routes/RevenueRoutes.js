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

//add revenue
router.post("/addRevenue", async (req, res) => {
    const { amount, date, type } = req.body;
    const revenue = new Revenue({ amount, type, date });
    await revenue.save();
    res.json({ success: true, message: "Revenue added" });
    }
);
module.exports = router;