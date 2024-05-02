const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminModel = require('./models/Admin');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mongodb:mongodb@airtrack.oioa0fg.mongodb.net/?retryWrites=true&w=majority/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3001, () => {
  console.log('Server started... at 3001');
});

app.get('/admin', async (req, res) => {
  console.log('Admin route', req);
  try {
    const users = await AdminModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/admin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin with the given username and password
    const admin = await AdminModel.findOne({ username, password });

    if (admin) {
      // If admin found, return success
      res.json({ success: true, message: 'Login successful' });
    } else {
      // If admin not found, return error
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    // If an error occurs, return error response
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/passenger', async (req, res) => {
  const passengers = await PassengerModel.find()
  .then((passengers) => {
    res.json(passengers);
  });
});



