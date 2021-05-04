import React, { useState, useContext } from 'react'
import { AlertContext } from '../../../context/alert/alertContext'

import { roundTimeQuarterHour } from '../../../Utility/RoundDate'
import { Location } from './Loaction'
import { DateP } from './DateP'
import { NoteListContext } from '../../../context/noteList/noteListContext'
import { UserContext } from '../../../context/user/userContext'
import { DropSelect } from './DropSelect'
export const NotesForm = () => {
  const descriptions = ['Work', 'Sport', 'Entetainment']
  const { User } = useContext(UserContext)
  const { addNote } = useContext(NoteListContext)
  const alert = useContext(AlertContext)
  const [selectValue, setSelectValue] = useState(descriptions[0])
  const [value, setValue] = useState('')
  const [formDate, setFormDate] = useState(roundTimeQuarterHour(new Date()))
  const [location, setLocation] = useState({ country: '', region: '' })

  const submitHandler = (event) => {
    event.preventDefault()

    if (value.trim()) {
      addNote(value.trim(), formDate, location, User, selectValue)
        .then(() => {
          alert.show('The note has been created', 'success')
        })
        .catch((e) => {
          console.log(e)
          alert.show('Something went wrong', 'danger')
        })
      setValue('')
    } else {
      alert.show('Enter a title for the note')
    }
  }
  return (
    <div className='d-flex justify-content-center'>
      <form className='m-5'>
        <div className='d-flex'>
          <input className='flex-grow-1 mr-1' type='text' placeholder='Title' value={value} onChange={(e) => setValue(e.target.value)} />
          <DropSelect selectValue={selectValue} setSelectValue={setSelectValue} itemsArr={descriptions} />
        </div>

        <div className='mt-04'>
          <Location location={location} setLocation={setLocation} />
          <DateP formDate={formDate} setFormDate={setFormDate} />
        </div>

        <button className={'btn custom-bg-color w-100 mt-1 text-light'} type='submit' onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  )
}
