const axios = require('axios');

const getWeather = (req, res) => {
  const city = req.query.city;

  axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.WEATHER_API_KEY}`
    )
    .then((location) => {
      if (location.data[0]) {
        const lat = location.data[0].lat;
        const lon = location.data[0].lon;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.WEATHER_API_KEY}&units=metric`
          )
          .then((weather) => {
            console.log(weather.data);
            res.status(200).json(weather.data);
          });
      } else {
        res.sendStatus(500);
      }
    });
};

module.exports = getWeather;
