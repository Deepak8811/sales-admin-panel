const StockService = require('../services/stock.service');

exports.getMonthlyTurnover = async (req, res) => {
  try {
    const turnover = await StockService.getMonthlyTurnover(); // Ensure this function returns correct data
    res.json({ success: true, data: turnover });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
