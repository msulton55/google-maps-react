import React, { useEffect, useRef, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapConfig from '../../../config/GoogleMapsConfig';

export const MapContainer = (props) => {

  let firstUpdate = useRef(true)

  const [coordinate, setCoordinate] = useState({})

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    console.log(coordinate)
  }, [])

  const clickHandler = (x, y, z) => {
    let lat = z.latLng.lat()
    let lng = z.latLng.lng()
    setCoordinate({lat, lng})
    console.log(coordinate)
  }

  return (
    <Map google={props.google}
        zoom={4.25}
        initialCenter={{lat: 54.5260, lng: 15.2551}}
        onClick={clickHandler}
        onReady={MapConfig}>

      <Marker position={{lat: 54.5260, lng: 15.2551}} />
      <Marker position={coordinate} />

    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAQh03n5w5S-HSnSIKpDXZ2Ed_e3-bFHIQ')
})(MapContainer)