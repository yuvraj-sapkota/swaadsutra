const Menu = require("../model/menuModel");

const getMenuByRestaurant = async (req, res) => {
  const restaurantId = req.query;

  if (!restaurantId) {
    return res.status(400).json({ message: "RestaurantId is required" });
  }

  try {
    const items = await Menu.find({ restaurantId });
    res.status(200).json({ message: "Public menu is", items });
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu" });
  }
};

module.exports = { getMenuByRestaurant };
