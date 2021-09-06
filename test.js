var axios = require('axios');

const config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJP7Mmxcc1t2oRQMaOYlQ2AwQ&fields=geometry&key=AIzaSyD_NiIEX2bA_s3jnz0W0F5vmNSUqn8zXqw`,
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(response.data.result.geometry.location);
  })
  .catch(function (error) {
    console.log(error);
  });
