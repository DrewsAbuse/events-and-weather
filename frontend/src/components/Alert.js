import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext)

  return (
    <CSSTransition in={alert.visible} timeout={650} classNames={'alert'} mountOnEnter unmountOnExit>
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible text-center mt-04`}>
        <strong>{alert.text} !</strong>
        <button onClick={hide} type='button' className='close' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </CSSTransition>
  )
}
