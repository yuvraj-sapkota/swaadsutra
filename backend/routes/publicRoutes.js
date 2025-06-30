const express = require("express");
const router = express.Router();
const {
  getMenuByRestaurant,
  getCategoryByRestaurant,
} = require("../controller/publicController");

router.get("/menu", getMenuByRestaurant);
router.get("/category", getCategoryByRestaurant);

module.exports = router;
