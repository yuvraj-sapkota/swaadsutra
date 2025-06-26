const express = require("express");
const router = express.Router();
const { generateQRCode } = require("../controller/qrCodeController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/generate", authMiddleware, generateQRCode);

module.exports = router;
