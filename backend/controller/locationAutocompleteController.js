const axios = require('axios');

const getLocation = (req, res) => {
  const input = req.query.input;
  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&radius=500&key=${process.env.MAP_API_KEY}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      const { predictions } = response.data;
      let returnData = [];
      predictions.map((location) => {
        const desctiption = location.description;
        const index = desctiption.indexOf(', ');
        const city = desctiption.substr(0, index);
        const region = desctiption.substr(index + 1);
        const place_id = location.place_id;
        return returnData.push({ city, region, place_id });
      });
      console.log(returnData);
      // console.log(JSON.stringify(response.data, null, 2));
      res.status(200).json(returnData);
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = getLocation;
