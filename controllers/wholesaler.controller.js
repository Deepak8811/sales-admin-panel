const Wholesaler = require('../models/wholesaler.model');
const Retailer = require('../models/retailer.model');
const Stock = require('../models/stock.model');

exports.getWholesalerWithRetailers = async (req, res) => {
  try {
    const wholesaler = await Wholesaler.findByPk(req.params.wholesaler_id, {
      include: Retailer,
    });

    if (!wholesaler) return res.status(404).json({ message: 'Wholesaler not found' });

    res.json(wholesaler);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

exports.getTotalTurnover = async (req, res) => {
  try {
    const { year } = req.params;
    const turnover = await Stock.findAll({
      attributes: [
        'wholesaler_id',
        [sequelize.fn('SUM', sequelize.col('stock_amount')), 'total_turnover'],
      ],
      where: sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), year),
      group: ['wholesaler_id'],
    });

    res.json(turnover);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

exports.getMaxTurnover = async (req, res) => {
  try {
    const maxTurnover = await Stock.findAll({
      attributes: [
        'wholesaler_id',
        'retailer_id',
        [sequelize.fn('MAX', sequelize.col('stock_amount')), 'max_turnover'],
      ],
      group: ['wholesaler_id', 'retailer_id'],
    });

    res.json(maxTurnover);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
