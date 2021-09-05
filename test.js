var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=adelaide&types=(cities)&radius=500&key=AIzaSyD_NiIEX2bA_s3jnz0W0F5vmNSUqn8zXqw',
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch(function (error) {
    console.log(error);
  });
