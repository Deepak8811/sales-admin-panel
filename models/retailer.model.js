const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Retailer = sequelize.define('Retailer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  mobile_number: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Retailer;
