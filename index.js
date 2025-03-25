require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');

const wholesalerRoutes = require('./routes/wholesaler.routes');
const retailerRoutes = require('./routes/retailer.routes');
const stockRoutes = require('./routes/stock.routes');

const app = express();
app.use(express.json());

app.use('/wholesaler', wholesalerRoutes);
app.use('/retailer', retailerRoutes);
app.use('/stock', stockRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected & synced');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('Database connection failed:', err));
