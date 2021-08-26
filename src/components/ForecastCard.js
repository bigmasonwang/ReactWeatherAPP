import React from 'react'
import './css/ForecastCard.scss'

const ForecastCard = () => {
  return (
    <div className='forecast_card'>
      <h2 className='forecast_card_day'>Monday</h2>
      <h3 className='forecast_card_date'>26 July</h3>
      <div>img</div>
      <p className='forecast_card_weather'>28</p>
      <p className='forecast_card_weather'>SUNSHINE</p>
      <p className='forecast_card_weather'>wind 3km/h</p>
    </div>
  )
}

export default ForecastCard
