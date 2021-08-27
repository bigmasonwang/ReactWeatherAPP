import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import WeatherCard from './WeatherCard';
import './css/WeatherScreen.scss';
import ForecastCard from './ForecastCard';

const WeatherScreen = () => {
  const [curCity, setCurCity] = useState('beijing');
  const [curWeather, setCurWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);
  const apiKey = 'ee8108c3ae38bd6c8f1175d0a7fd72e8';

  useEffect(() => {
    const fetchWeatherData = () => {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${curCity}&appid=${apiKey}`
        )
        .then((res) => {
          const lat = res.data[0].lat;
          const lon = res.data[0].lon;
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`
            )
            .then((res) => {
              // console.log(res.data);
              setCurWeather(res.data.current);
              setDailyWeather(res.data.daily);
            });
        });
    };
    fetchWeatherData();
  }, [curCity]);
  return (
    <div className='weather_screen'>
      <SideBar curCity={curCity} handleCityChange={city=>setCurCity(city)} />
      <div className='weather_screen_container'>
        <WeatherCard curWeather={curWeather} curCity={curCity} />
        {[1, 2, 3, 4].map((i) => {
          return (
            <ForecastCard
              key={i}
              dailyWeather={dailyWeather[i] || null}
              curCity={curCity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherScreen;
