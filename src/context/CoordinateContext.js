import React, { createContext, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';

const storedData = (state = {}, action) => {
  state = action.data
  return state
}

const store = configureStore({reducer: storedData})

const SharedCoordinate = (data) => {
  store.dispatch({type: 'x', data: data})
}

const CoordinateContext = createContext({lat: 0, lng: 0})

const CoordinateContextProvider = (props) => {
  const [coordinate, setCoordinate] = useState({lat: 0, lng: 0})
  store.subscribe(() => {setCoordinate(store.getState())})
  return (
    <CoordinateContext.Provider value={coordinate}>
      {props.children}
    </CoordinateContext.Provider>
  )
}

export { CoordinateContext, SharedCoordinate };
export default CoordinateContextProvider;