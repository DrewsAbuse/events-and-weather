import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateP({ formDate, setFormDate }) {
  return (
    <>
      <DatePicker
        className='ml-1'
        timeFormat='HH:mm'
        timeIntervals={15}
        closeOnScroll={true}
        showTimeSelect
        selected={formDate}
        onChange={(date) => setFormDate(date)}
        dateFormat={'MMMM d, yyyy HH:mm'}
      />
    </>
  )
}
export { DateP }
