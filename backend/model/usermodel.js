const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  restaurantName: {
    type: String,
    required: true,
  },
  restaurantDescription: {
    type: String,
  },
  restaurantAddress: {
    type: String,
  },
  openingHours: {
    type: String,
  },
  restaurantCoverPhoto: {
    type: String, 
  },
  restaurantProfilePhoto: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
