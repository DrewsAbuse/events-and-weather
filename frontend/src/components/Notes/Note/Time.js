import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
const Time = ({ date }) => {
  const time = new Date(date).toString().slice(0, 24)

  return <Fragment>{time}</Fragment>
}
Time.propTypes = {
  date: PropTypes.string.isRequired,
}
export { Time }
