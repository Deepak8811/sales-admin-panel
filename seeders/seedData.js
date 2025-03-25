const sequelize = require('../config/database');
const Wholesaler = require('../models/wholesaler.model');
const Retailer = require('../models/retailer.model');
const Stock = require('../models/stock.model');

async function seedData() {
  await sequelize.sync({ force: true });

  const wholesaler = await Wholesaler.create({ name: "ABC Wholesaler", mobile_number: "9876543210" });
  const retailer = await Retailer.create({ name: "XYZ Retailer", mobile_number: "1234567890" });

  await Stock.create({ wholesaler_id: wholesaler.id, retailer_id: retailer.id, stock_amount: 5000, date: "2021-01-01" });

  console.log('Data Seeded!');
}

seedData();
