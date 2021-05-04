import React from 'react'
import PropTtypes, { string } from 'prop-types'

const ToggleButton = ({ isOn, handleToggle, buttonLabels, btnColor }) => {
  return (
    <div>
      <label
        className='btn btn-sm'
        style={isOn ? { backgroundColor: btnColor[1] } : { backgroundColor: btnColor[0] }}
        checked={isOn}
        onClickCapture={handleToggle}
        type='button'
      >
        {isOn ? buttonLabels[0] : buttonLabels[1]}
      </label>
    </div>
  )
}
ToggleButton.propTypes = {
  isOn: PropTtypes.bool,
  handleToggle: PropTtypes.func,
  buttonLabels: PropTtypes.arrayOf(string),
}
export { ToggleButton }
