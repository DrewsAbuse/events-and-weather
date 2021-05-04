import { useContext, useState } from 'react'
import { AlertContext } from '../../../context/alert/alertContext'
import { Time } from './Time'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { WeatherState } from '../../../context/Weather/WeatherState'
import { UserContext } from '../../../context/user/userContext'
import { WeatherData } from '../Weather/WeatherData'
import Modal from '../../Modal'
const NoteItem = ({ note, onRemove }) => {
  const alert = useContext(AlertContext)
  const { User } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const removeItem = () => {
    onRemove(note.id, User)
    alert.show('Note delete', 'danger')
  }
  const openDesc = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='note' key>
      <div className=' mb-025'>
        <strong>
          Event: <i>{note.title}</i>
        </strong>
        <button className='btn btn-danger float-right  Xcolse-btn' type='button' onClick={removeItem}>
          &times;
        </button>
      </div>
      <div className=' mb-025'>
        <strong>Date:</strong>
        <small>
          <Time date={note.event_date} />
        </small>
      </div>
      {note.region ? (
        <div className=' mb-025'>
          <strong>
            Location: <i>{note.region}</i>
          </strong>

          <WeatherState>
            <WeatherData region={note.region} date={note.event_date} />
          </WeatherState>
        </div>
      ) : null}
      <div className='text-center'>
        <button type='button' className='btn  custom-bg-color text-light ' onClick={openDesc}>
          description
        </button>

        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
        >
          {note.description}
        </Modal>
      </div>
    </div>
  )
}
NoteItem.propTypes = {
  note: PropTypes.object,
  onRemove: PropTypes.func,
}
export { NoteItem }
