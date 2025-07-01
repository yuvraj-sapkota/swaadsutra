const express = require("express");
const router = express.Router();
const {
  getMenuByRestaurant,
  getCategoryByRestaurant,
} = require("../controller/publicController");

router.get("/menu/:restaurantId", getMenuByRestaurant);
router.get("/category/:restaurantId", getCategoryByRestaurant);

module.exports = router;
