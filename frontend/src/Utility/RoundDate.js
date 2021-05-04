function roundTimeQuarterHour(time) {
  var timeToReturn = new Date(time)

  timeToReturn.setMilliseconds(
    Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
  )
  timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60)
  timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15)
  return timeToReturn
}
export { roundTimeQuarterHour }
