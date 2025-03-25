const express = require('express');
const router = express.Router();
const StockController = require('../controllers/stock.controller');

router.get('/monthly-turnover', StockController.getMonthlyTurnover);

module.exports = router;
