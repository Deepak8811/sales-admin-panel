const express = require('express');
const router = express.Router();
const wholesalerController = require('../controllers/wholesaler.controller');

router.get('/:wholesaler_id', wholesalerController.getWholesalerWithRetailers);
router.get('/turnover/:year', wholesalerController.getTotalTurnover);
router.get('/max-turnover', wholesalerController.getMaxTurnover);

module.exports = router;
