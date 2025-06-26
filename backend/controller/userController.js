const User = require("../model/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup controller
const registerUser = async (req, res) => {
  try {
    const {
      userName,
      password,
      restaurantName,
      restaurantDescription,
      restaurantAddress,
      openingHours,
      restaurantCoverPhoto,
      restaurantProfilePhoto,
    } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const newUser = new User({
      userName,
      password: hashedPassword,
      restaurantName,
      restaurantDescription,
      restaurantAddress,
      openingHours,
      restaurantCoverPhoto,
      restaurantProfilePhoto,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log("Error while registering ", error);
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

// Login controller
const loginUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("JWT Secret:", process.env.JWT_SECRET);

    return res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User details are:", user });
  } catch (error) {
    console.log("Error while getting user data", error);
    return res
      .status(500)
      .json({ message: "Failed to get user details", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserDetails,
};
