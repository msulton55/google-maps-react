import React, { useEffect, useState, useRef } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapConfig from '../../../config/GoogleMapsConfig';
import { Haversin } from '../../../function/Haversin';
import { SharedCoordinate } from '../../../context/CoordinateContext';
import { SharedDistance } from '../../../context/DistanceContext';

const MapContainer = (props) => {
  const firstUpdate = useRef(true)
  const [sourceCoordinate] = useState({lat: 48.8566, lng: 2.3522})
  const [currentCoordinate, setCurrentCoordinate] = useState({lat: 0, lng: 0})
  const [distance, setDistance] = useState()

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    SharedCoordinate(currentCoordinate)
    SharedDistance(distance)
  }, [distance])

  const mapClickHandler = (x, y, z) => {
    let tempDistance = 0
    let currentLat = z.latLng.lat()
    let currentLng = z.latLng.lng()  

    setCurrentCoordinate({lat: currentLat, lng: currentLng})
    tempDistance =  Haversin(currentLat, currentLng, sourceCoordinate.lat, sourceCoordinate.lng)
    setDistance(tempDistance)
  }

  const markerClickHandler = () => {
    setCurrentCoordinate(undefined)
  }

  return (
    <Map google={props.google}
        zoom={4.25}
        initialCenter={{lat: 54.5260, lng: 15.2551}}
        onClick={mapClickHandler}
        onReady={MapConfig}>
      
      {/* <Marker position={sourceCoordinate} /> */}
      {currentCoordinate !== undefined ? <Marker position={currentCoordinate} onClick={markerClickHandler} /> : <div />}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAQh03n5w5S-HSnSIKpDXZ2Ed_e3-bFHIQ')
})(MapContainer)