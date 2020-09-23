import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export const MapContainer = (props) => {

  let marker = null

  const [coordinate, setCoordinate] = useState([{position: {lat: 54.5260, lng: 15.2551}}])
  useEffect(() => {
    coordinate.map((xy, index) => {
      marker = <Marker key={index} position={xy.position} />
      console.log(marker)
    })
  })

  const clickHandler = (x, y, z) => {
    let lat = z.ab.x
    let lng = z.ab.y
    setCoordinate([{position: {lat: lat, lng: lng}}])
  }

  return (
    <Map google={props.google}
        zoom={4.25}
        initialCenter={{lat: 54.5260, lng: 15.2551}}
        onClick={clickHandler}>

      {marker}

    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: ('your_api_key')
})(MapContainer)