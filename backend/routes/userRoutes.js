const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserDetails,
} = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUserDetails", authMiddleware, getUserDetails);

module.exports = router;
