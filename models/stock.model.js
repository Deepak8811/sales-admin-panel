const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Wholesaler = require('./wholesaler.model');
const Retailer = require('./retailer.model');

const Stock = sequelize.define('Stock', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  wholesaler_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Wholesaler, key: 'id' } },
  retailer_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Retailer, key: 'id' } },
  stock_amount: { type: DataTypes.FLOAT, allowNull: false },
  date: { type: DataTypes.DATEONLY, allowNull: false },
});

Wholesaler.belongsToMany(Retailer, { through: 'WholesalerRetailer' });
Retailer.belongsToMany(Wholesaler, { through: 'WholesalerRetailer' });
Wholesaler.hasMany(Stock, { foreignKey: 'wholesaler_id' });
Retailer.hasMany(Stock, { foreignKey: 'retailer_id' });

module.exports = Stock;
