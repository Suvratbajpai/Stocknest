require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");

const authRoute = require("./routes/AuthRoute");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 8000;
const url = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/", authRoute);

// Serve Frontend
app.use("/", express.static(path.join(__dirname, "frontend/build")));

// Serve Dashboard
app.use("/dashboard", express.static(path.join(__dirname, "dashboard/build")));

// Handle Frontend Routes
app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard/build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// API Routes
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).send("Order Saved!");
  } catch (error) {
    res.status(500).send("Failed to save order.");
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
