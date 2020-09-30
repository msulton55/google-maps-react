import React, { useContext } from 'react';
import CoordinateContextProvider, { CoordinateContext } from '../../context/CoordinateContext';
import DistanceContextProvider, { DistanceContext } from '../../context/DistanceContext';

const StatusInfo = (props) => {
  const scopeStyle = {
    "margin-top": 50
  }

  let initialPoint = 10000
  const {lat, lng} = useContext(CoordinateContext)
  const distance = useContext(DistanceContext)

  return (
    <div className="container-fluid border" style={scopeStyle}>
      <CoordinateContextProvider>
        <p>Latitude: {lat.toFixed(5)}</p>
        <p>Longitude: {lng.toFixed(5)}</p>
      </CoordinateContextProvider>
      <DistanceContextProvider>
        <p>Initial Point: {initialPoint}</p>
      </DistanceContextProvider>
    </div>
  )
}

export default StatusInfo;