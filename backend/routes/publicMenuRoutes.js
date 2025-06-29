const express = require("express");
const router = express.Router();
const { getMenuByRestaurant } = require("../controller/publicMenuController");

router.get("/menu", getMenuByRestaurant);

module.exports = router;
