const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/transactions", transactionRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Money Manager Backend is running");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
