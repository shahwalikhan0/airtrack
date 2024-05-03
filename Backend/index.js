const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminModel = require('./models/Admin');
const UserRoutes = require('./routes/UserRoutes');
const FlightRoutes = require('./routes/FlightRoutes');
const InventoryRoutes = require('./routes/InventoryRoutes');
const RevenueRoutes = require('./routes/RevenueRoutes');
const DiscountRoutes = require('./routes/DiscountRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mongodb:mongodb@airtrack.oioa0fg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3001, () => {
  console.log('Server started... at 3001');
});


app.use('/', UserRoutes);
app.use('/', FlightRoutes);
app.use('/', InventoryRoutes);
app.use('/', RevenueRoutes);
app.use('/', DiscountRoutes);


