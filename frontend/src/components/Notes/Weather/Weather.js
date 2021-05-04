import React, { useContext } from 'react'
import { WeatherContext } from '../../../context/Weather/weatherContext'
export default function Weather() {
  const { stateWeather } = useContext(WeatherContext)

  if (!(stateWeather === 'Weather not yet available')) {
    const imgSrc = `https://www.weatherbit.io/static/img/icons/${stateWeather.weather.icon}.png`
    return (
      <>
        <div>
          <strong>
            Minimum temperature {stateWeather.low_temp} C&#176; <br />
            Average temperature {stateWeather.temp} C&#176; <br />
            Maximum temperature {stateWeather.high_temp} C&#176;
          </strong>
        </div>

        <div>
          <div style={{ float: 'left', marginTop: '3rem' }}>
            <h3>{stateWeather.weather.description}</h3>
          </div>
          <div style={{ float: 'left' }}>
            <img src={imgSrc} alt='Weather icon'></img>
          </div>
        </div>
        <div>
          <strong>
            Wind speed {stateWeather.wind_spd} km/h
            <br />
            Direction of the wind
            {stateWeather.wind_cdir_full}
          </strong>
        </div>
      </>
    )
  } else {
    return <div>{stateWeather}</div>
  }
}
