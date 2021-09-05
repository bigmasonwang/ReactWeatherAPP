const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  console.log('API is running...');
  res.sendStatus(200);
});

app.use('/api/weather', weatherRoutes);
// app.get('/api/weather', (req, res)=>{
//   console.log(req.query);
//   console.log('req');
//   res.sendStatus(200)
// });



const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running on port ${PORT}`));
