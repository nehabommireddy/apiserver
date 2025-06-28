
const express = require('express');
const connectDB = require('./db'); // use new db module
const itemRoutes = require('./routes/items.js');

const app = express();
app.use(express.json());
app.use('/items', itemRoutes);

if (require.main === module) {
  // Only connect DB and start server if this file is run directly
  connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/items');
  app.listen(5000, () => {
    console.log('🚀 Server running on port 5000');
  });
}

module.exports = app;