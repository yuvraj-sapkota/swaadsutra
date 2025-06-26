const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Menu", menuSchema);
