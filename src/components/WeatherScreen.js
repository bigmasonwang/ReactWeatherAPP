import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import WeatherCard from './WeatherCard';
import './css/WeatherScreen.scss';
import MainWeatherCard from './MainWeatherCard';

const WeatherScreen = () => {
  const [curCity, setCurCity] = useState('beijing');
  const [curWeather, setCurWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);

  useEffect(() => {
    const fetchWeatherData = () => {
      axios
        .get(
          `http://localhost:3001/api/weather?city=${curCity}`
        )
        .then((res) => {
          // console.log(res.data);
          setCurWeather(res.data.current);
          setDailyWeather(res.data.daily);
        });
    };
    fetchWeatherData();
  }, [curCity]);
  return (
    <div className='weather_screen'>
      <SideBar
        curCity={curCity}
        handleCityChange={(city) => setCurCity(city)}
      />
      <div className='weather_screen_container'>
        <WeatherCard curWeather={curWeather} curCity={curCity} />
        {[1, 2, 3, 4].map((i) => {
          return (
            <MainWeatherCard
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
