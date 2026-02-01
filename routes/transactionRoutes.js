const express = require("express");
const router = express.Router();

const {
  addTransaction,
  getTransactions,
} = require("../controllers/transactionController");


router.get("/", getTransactions);


router.post("/", addTransaction);

module.exports = router;
