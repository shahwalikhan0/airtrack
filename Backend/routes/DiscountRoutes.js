const express = require("express");
const Discount = require("../models/Discount");
const router = express.Router();

router.get("/coupon", async (req, res) => {
    const coupon = await Discount.find();
    if (!coupon)
        res.json({ success: false, message: "No Discount coupon found" });
    else
        res.json(coupon);
    }
);

router.delete("/removeCoupon/:id", async (req, res) => {
    try {
        const coupon = await Discount.findById(req.params.id);
        if (!coupon) {
          return res.json({ success: false, message: "No coupons found" });
        }
        await Discount.deleteOne({ _id: req.params.id });
        return res.json({ success: true, message: "Coupon deleted" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
      }
  }); 

router.post("/addCoupon", async (req, res) => {
    const { discountCode, discount_percent } = req.body;
    const coupon = new Discount({ discountCode, discount_percent });
    await coupon.save();
    res.json({ success: true, message: "Coupon added" });
    }
);

module.exports = router;