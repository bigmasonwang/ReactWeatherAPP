import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import WeatherCard from './WeatherCard';
import './css/WeatherScreen.scss';
import ForecastCard from './ForecastCard';

const WeatherScreen = () => {
  const [location, setLocation] = useState({
    locationName: 'Sydney',
    region: 'NSW, Australia',
    place_id: 'ChIJP3Sa8ziYEmsRUKgyFmh9AQM',
  });
  const [curWeather, setCurWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);

  useEffect(() => {
    const fetchWeatherData = () => {
      axios
        .get(`http://localhost:3001/api/weather?place_id=${location.place_id}`)
        .then((res) => {
          // console.log(res.data);
          setCurWeather(res.data.current);
          setDailyWeather(res.data.daily);
        });
    };
    fetchWeatherData();
  }, [location]);
  return (
    <div className='weather_screen'>
      <SideBar handleLocationChange={(location) => setLocation(location)} />
      <div className='weather_screen_container'>
        <WeatherCard curWeather={curWeather} curCity={location.locationName} />
        {[1, 2, 3, 4].map((i) => {
          return (
            <ForecastCard key={i} dailyWeather={dailyWeather[i] || null} />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherScreen;
