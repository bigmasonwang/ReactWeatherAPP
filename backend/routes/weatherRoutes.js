const express = require('express');
const getWeather = require('../controller/weatherController');

const router = express.Router();

router.route('/').get(getWeather);

module.exports = router;
