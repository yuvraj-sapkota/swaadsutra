const express = require("express");

const router = express.Router();

const menuController = require("../controller/menuController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/createMenu", authMiddleware, menuController.createMenuItem);
router.get("/getMenu", authMiddleware, menuController.getAllMenuItems);
router.get("/:id", authMiddleware, menuController.getMenuItemById);
router.put("/:id", authMiddleware, menuController.updateMenuItem);
router.delete("/delete/:id", authMiddleware, menuController.deleteMenuItem);

module.exports = router;
