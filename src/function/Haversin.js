export const Haversin = (startLat, startLong, endLat, endLong) => {
  const EARTH_RADIUS = 6371
  const DEGREE_TO_RADIAN = 0.0174533
  let dLat = (endLat - startLat) * DEGREE_TO_RADIAN
  let dLong = (endLong - startLong) * DEGREE_TO_RADIAN 

  startLat = startLat * DEGREE_TO_RADIAN
  endLat = endLat * DEGREE_TO_RADIAN

  let a = haversinConverter(dLat) + Math.cos(startLat) * Math.cos(endLat) * haversinConverter(dLong)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  return EARTH_RADIUS * c
}

const haversinConverter = (value) => {
  return Math.pow(Math.sin(value/2), 2)
}