const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      createdAt,
    });

    // Create token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,            // secure against XSS
      sameSite: "Lax",           // helps with CSRF protection
      secure: process.env.NODE_ENV === "production", // use secure cookies in prod
    });

    // Send response
    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: {
        email: user.email,
        username: user.username,
        _id: user._id,
      },
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Incorrect email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect email or password" });
    }

    // Create token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "production",
    });

    // Send response
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        email: user.email,
        username: user.username,
        _id: user._id,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
