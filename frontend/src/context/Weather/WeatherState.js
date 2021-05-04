import React, { useState } from 'react'
import axios from 'axios'
import { WeatherContext } from './weatherContext'
function WeatherState({ children }) {
  const [stateWeather, setStateWeather] = useState(null)

  const getWeather = async (region, date) => {
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${region}&key=8e45f67619fd4fd7968bdbfb241c3e95`
    )
    function FilterDate(date) {
      const Date = date.substring(0, 10)

      return function Filter(elment) {
        return elment.datetime === Date
      }
    }
    const MyFilter = FilterDate(date)
    console.log(date)
    const Match = res.data.data.find((element) => {
      return MyFilter(element)
    })

    if (Match === undefined) {
      setStateWeather('Weather not yet available')
    } else {
      try {
        setStateWeather(
          res.data.data.find((element) => {
            return MyFilter(element)
          })
        )
      } catch (e) {
        throw new Error(e.message)
      }
    }
  }
  return (
    <WeatherContext.Provider value={{ getWeather, stateWeather }}>
      {children}
    </WeatherContext.Provider>
  )
}
export { WeatherState }
