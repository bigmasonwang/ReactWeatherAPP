const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');
const locationRoutes = require('./routes/locationRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('API is running...');
  res.sendStatus(200);
});

app.use('/api/weather', weatherRoutes);

app.use('/api/location', locationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
