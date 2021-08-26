import React from 'react'
import './css/WeatherCard.scss'
const WeatherCard = ({curWeather, curCity}) => {
  return (
    <div className='weather_card'>
      <p className='card_time'>{new Date(curWeather.dt*1000).toLocaleDateString()}</p>
      <h1 className='card_location'>{curCity}</h1>
      <p className='card_text'>Chance of Rina: 30%</p>
      <h2 className='card_temprature'> 17°</h2>
      <p className=''>HUMIDITY 64%</p>
      <p className=''>WIND 12 K/M</p>
    </div>
  );
}

export default WeatherCard
