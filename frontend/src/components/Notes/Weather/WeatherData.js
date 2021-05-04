import React, { useContext, useState } from 'react'
import { WeatherContext } from '../../../context/Weather/weatherContext'
import { Loader } from '../../Loader'

import Weather from './Weather'

import Modal from '../../Modal'
function WeatherData({ region, date }) {
  const [isOpen, setIsOpen] = useState(false)
  const { getWeather, stateWeather } = useContext(WeatherContext)
  const weatherShow = () => {
    getWeather(region, date)
    setIsOpen(true)
  }

  return (
    <>
      <button type='button' className='btn  custom-bg-color text-light' onClick={weatherShow}>
        weather
      </button>

      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        {stateWeather ? <Weather /> : <Loader />}
      </Modal>
    </>
  )
}
export { WeatherData }
