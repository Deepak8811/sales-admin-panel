const Retailer = require('../models/retailer.model');
const { Sequelize } = require('sequelize');

exports.getRetailersWithSingleWholesaler = async (req, res) => {
  try {
    const retailers = await Retailer.findAll({
      attributes: ['id', 'name', 'mobile_number'],
      include: {
        model: require('../models/wholesaler.model'),
        through: { attributes: [] },
        required: true,
      },
      having: Sequelize.literal('COUNT(Wholesalers.id) = 1'),
      group: ['Retailer.id'],
    });

    res.json(retailers);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
