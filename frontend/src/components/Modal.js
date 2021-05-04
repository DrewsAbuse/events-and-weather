import React from 'react'
import ReactDom from 'react-dom'
import '../Styles/App.scss'

let MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  padding: '28px',
  zIndex: 1000,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
}

export default function Modal({ open, children, onClose, bgColor, brRadius }) {
  if (!open) return null
  if (!bgColor) {
    bgColor = '#FFF'
  }
  if (!brRadius) {
    brRadius = '30px 30px'
  }
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={{ backgroundColor: `${bgColor}`, borderRadius: `${brRadius}`, ...MODAL_STYLES }}>
        <div>{children}</div>
        <div className='text-center'>
          <button className='btn btn-dark mt-04 mb-3' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
