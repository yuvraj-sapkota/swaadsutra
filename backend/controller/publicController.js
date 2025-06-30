const Menu = require("../model/menuModel");
const Category = require("../model/categoryModel");

const getMenuByRestaurant = async (req, res) => {
  const restaurantId = req.query.restaurantId;

  if (!restaurantId) {
    return res.status(400).json({ message: "RestaurantId is required" });
  }

  try {
    const items = await Menu.find({ restaurantId });
    res.status(200).json({ message: "Public menu is", menuItems: items });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching menu", error: error.message });
  }
};

const getCategoryByRestaurant = async (req, res) => {
  const restaurantId = req.query.restaurantId;

  if (!restaurantId) {
    return res
      .status(400)
      .json({ message: "Restaurant id is required", error });
  }
  try {
    const items = await Category.find({ restaurantId });
    return res.status(200).json({
      message: "Restaurant category fetched successfully",
      categoryItems: items,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching category",
      error: error.message,
    });
  }
};

module.exports = { getMenuByRestaurant, getCategoryByRestaurant };
