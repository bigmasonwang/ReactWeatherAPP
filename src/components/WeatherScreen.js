import React, { useState } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import WeatherCard from './WeatherCard';
import './css/WeatherScreen.scss';
import ForecastCard from './ForecastCard';

const WeatherScreen = () => {
  const [curCity, setCurCity] = useState('beijing');
  const [curWeather, setCurWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState({})
  const apiKey = 'ee8108c3ae38bd6c8f1175d0a7fd72e8';
  const handleCityChange = (city) => {
    setCurCity(city);
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
      )
      .then((res) => {
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}`
          )
          .then((res) => {
            console.log(res.data);
            setCurWeather(res.data.current);
            setDailyWeather(res.data.daily);
          });
      });
  };

  return (
    <div className='weather_screen'>
      <SideBar curCity={curCity} handleCityChange={handleCityChange} />
      <div className='weather_screen_container'>
        <WeatherCard curWeather={curWeather} curCity={curCity} />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </div>
  );
};

export default WeatherScreen;
