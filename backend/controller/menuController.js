const Menu = require("../model/menuModel");

// Create a new menu item
const createMenuItem = async (req, res) => {
  try {
    const { productName, productPrice, category, productImage } = req.body;

    if (!productName || !productPrice || !category || !productImage) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Menu({
      restaurantId: req.user._id,
      productName,
      productPrice,
      category,
      productImage,
    });
    await newItem.save();

    res.status(200).json({ message: "Item added successfully", newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create menu item", error: error.message });
  }
};

const getAllMenuItems = async (req, res) => {
  try {
    const items = await Menu.find({ restaurantId: req.user._id });
    res
      .status(200)
      .json({ message: "All menu items fetched successfully", items });
  } catch (error) {
    console.log("Error while getting all items", error);
    res
      .status(500)
      .json({ message: "Failed to get menu items", error: error.message });
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const { itemId } = req.params.id;
    const item = await Menu.findById({ itemId, restaurantId: req.user._id });
    if (!item) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json({ message: "Item is", item });
  } catch (error) {
    console.log("Error while getting a single item", error);
    res
      .status(500)
      .json({ message: "Error fetching menu item", error: error.message });
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const updateItem = await Menu.findByIdAndUpdte(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateItem) {
      return res.status(404).json({ message: "Menu item not found " });
    }

    res.status(200).json({ message: "Item updated successfully", updateItem });
  } catch (error) {
    console.log("Error while updating the item", error);
    return res
      .status(500)
      .json({ message: "Failed to update menu item", error: error.message });
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const deletedItem = await Menu.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(200).json({ message: "Menu item not found" });
    }
    res.status(200).json({ message: "Menu item deleted susccessfully" });
  } catch (error) {
    console.log("Error while deleting the item", error);
    res
      .status(500)
      .json({ message: "Failed to delete menu item", error: error.message });
  }
};

module.exports = {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
};
