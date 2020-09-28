import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapConfig from '../../../config/GoogleMapsConfig';
import { Haversin } from '../../../function/Haversin';

const MapContainer = (props) => {

  let firstUpdate = useRef(true)

  const [currentCoordinate, setCurrentCoordinate] = useState()
  const [sourceCoordinate, setSourceCoordinate] = useState()
  const [distance, setDistance] = useState()

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    console.log("Source coordinate -> " + JSON.stringify(sourceCoordinate))
  }, [sourceCoordinate])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    console.log("Current coordinate -> " + JSON.stringify(currentCoordinate))
  }, [currentCoordinate])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    console.log("Distance from current to source -> " + distance)
  }, [distance])

  const clickHandler = (x, y, z) => {
    let sourceLat = x.initialCenter.lat
    let sourceLng = x.initialCenter.lng
    let currentLat = z.latLng.lat()
    let currentLng = z.latLng.lng()
    let distance =  Haversin(currentLat, currentLng, sourceLat, sourceLng)

    setCurrentCoordinate({lat: currentLat, lng: currentLng})
    setSourceCoordinate({sourceLat, sourceLng})
    setDistance(distance)

  }

  return (
    <Map google={props.google}
        zoom={4.25}
        initialCenter={{lat: 54.5260, lng: 15.2551}}
        onClick={clickHandler}
        onReady={MapConfig}>

      <Marker position={{lat: 54.5260, lng: 15.2551}} />
      <Marker position={currentCoordinate} />

    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAQh03n5w5S-HSnSIKpDXZ2Ed_e3-bFHIQ')
})(MapContainer)