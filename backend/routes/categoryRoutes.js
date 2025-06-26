const express = require("express");

const router = express.Router();

const categoryController = require("../controller/categoryController");

router.post("/createCategory", categoryController.addCategory);
router.get("/getCategory", categoryController.getCategory);

module.exports = router;
