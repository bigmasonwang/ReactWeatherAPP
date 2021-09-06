const express = require('express');
const getLocation = require('../controller/locationAutocompleteController');

const router = express.Router();

router.route('/').get(getLocation);

module.exports = router;