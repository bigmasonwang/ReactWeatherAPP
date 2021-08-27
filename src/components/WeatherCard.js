import React from 'react'
import './css/WeatherCard.scss'
const WeatherCard = ({curWeather, curCity}) => {
  return (
    <div className='weather_card'>
      <p className='card_time'>{new Date(curWeather.dt*1000).toLocaleDateString()}</p>
      <h1 className='card_location'>{curCity}</h1>
      <h2 className='card_temprature'>{Math.round(curWeather.temp)}°</h2>
      <p className=''>HUMIDITY {curWeather.humidity}%</p>
      <p className=''>WIND {curWeather.wind_speed} m/s</p>
    </div>
  );
}

export default WeatherCard
