const Category = require("../model/categoryModel");
const { get } = require("../routes/publicMenuRoutes");

const getCategoryByRestaurant = async (req, res) => {
  const restaurantId = req.query.restaurantId;

  if (!restaurantId) {
    return res.status(400).json({ message: "Restaurant id is required" });
  }

  try {
    const items = await Category.find({ restaurantId });
    res.status(200).json({ message: "Public menu is", items });
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu" });
  }
};

module.exports = { getCategoryByRestaurant };
