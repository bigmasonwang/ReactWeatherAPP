const express = require('express');
const getLocation = require('../controller/locationAutocompleteController');

const router = express.Router();

router.route('/autocomplete').get(getLocation);

module.exports = router;