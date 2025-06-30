const express = require("express");
const router = express.Router();
const {
  getMenuByRestaurant,
  getCategoryByRestaurant,
} = require("../controller/publicMenuController");

router.get("/menu", getMenuByRestaurant);
router.get("/category", getCategoryByRestaurant);

module.exports = router;
