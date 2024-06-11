
const express = require("express");
const { verifyToken } = require("../middleware/jwt.js");
const { getOrders, intent, confirm } = require("../controllers/order.controller.js");

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

module.exports = router;
