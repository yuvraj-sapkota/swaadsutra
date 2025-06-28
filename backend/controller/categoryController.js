const Category = require("../model/categoryModel");

const addCategory = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category is not available" });
    }

    const newCategory = new Category({ category, restaurantId: req.user._id });
    await newCategory.save();

    return res
      .status(200)
      .json({ message: "Category added successfully", newCategory });
  } catch (error) {
    console.log("Error while adding category", error);
    return res.status(500).json({ message: "Category is not added" });
  }
};

const getCategory = async (req, res) => {
  try {
    const allCategory = await Category.find({ restaurantId: req.user._id });
    return res
      .status(200)
      .json({ message: "Available category are", allCategory });
  } catch (error) {
    console.log("Error while getting category", error);
    return res
      .status(500)
      .json({ message: "Failed to add category", error: error.message });
  }
};

module.exports = { addCategory, getCategory };
