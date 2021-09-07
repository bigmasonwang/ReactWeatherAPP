import React from 'react';
import './css/ForecastCard.scss';

const ForecastCard = ({ dailyWeather }) => {
  if (dailyWeather) {
    const date = new Date(dailyWeather.dt * 1000);
    const weather = dailyWeather.weather[0];
    return (
      <div className='forecast_card'>
        <h2 className='forecast_card_day'>
          {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}
        </h2>
        <h3 className='forecast_card_date'>{date.toLocaleDateString()}</h3>
        <img
          alt={weather.description}
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        ></img>
        <p className='forecast_card_weather'>
          {Math.round(dailyWeather.temp.min)}~
          {Math.round(dailyWeather.temp.max)}°
        </p>
        <p className='forecast_card_weather'>{weather.description}</p>
        <p className='forecast_card_weather'>
          Wind: {dailyWeather.wind_speed}m/s
        </p>
      </div>
    );
  } else {
    return <div className='forecast_card'></div>;
  }
};

export default ForecastCard;
