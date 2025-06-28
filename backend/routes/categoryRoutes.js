const express = require("express");

const router = express.Router();

const categoryController = require("../controller/categoryController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/createCategory", authMiddleware, categoryController.addCategory);
router.get("/getCategory", authMiddleware, categoryController.getCategory);

module.exports = router;
