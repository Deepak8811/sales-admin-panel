const express = require('express');
const router = express.Router();
const retailerController = require('../controllers/retailer.controller');

router.get('/single-wholesaler', retailerController.getRetailersWithSingleWholesaler);

module.exports = router;
