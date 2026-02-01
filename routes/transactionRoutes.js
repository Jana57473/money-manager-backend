const express = require("express");
const router = express.Router();

const {
  addTransaction,
  getTransactions,
} = require("../controllers/transactionController");

// GET all transactions
router.get("/", getTransactions);

// POST new transaction
router.post("/", addTransaction);

module.exports = router;
