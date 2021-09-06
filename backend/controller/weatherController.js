const axios = require('axios');
const { NULL } = require('node-sass');

const getLatLngLiteral = async (place_id) => {
  const config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=geometry&key=${process.env.MAP_API_KEY}`,
    headers: {},
  };

  try {
    const response = await axios(config);
    if (response.data.result) {
      return response.data.result.geometry.location;
    }
    return {};
  } catch (error) {
    // Error 😨
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
    console.log(error);
  }
  return {};
  // console.log(response.data.result.geometry.location);
};

const getWeather = async (req, res) => {
  const place_id = req.query.place_id;
  const latlng = await getLatLngLiteral(place_id);
  if (latlng.lat && latlng.lng) {
    const lat = latlng.lat;
    const lng = latlng.lng;
    const config = {
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${process.env.WEATHER_API_KEY}&units=metric`,
      headers: {},
    };
    try {
      const response = await axios(config);
      return res.status(200).json(response.data);
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      console.log(error);
    }
    return {}
  }
  res.status(404);
};

module.exports = getWeather;
