const axios = require('axios');

const getLocation = (req, res) => {
  const input = req.query.input;
  const config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&radius=500&key=${process.env.MAP_API_KEY}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      const { predictions } = response.data;
      let returnData = [];
      predictions.map((location) => {
        const locationName = location.structured_formatting.main_text;
        const region = location.structured_formatting.secondary_text;
        const place_id = location.place_id;
        return returnData.push({ locationName, region, place_id });
      });
      // console.log(returnData);
      // console.log(JSON.stringify(response.data, null, 2));
      res.status(200).json(returnData);
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = getLocation;
