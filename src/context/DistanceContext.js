import React, { createContext, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';

const storedData = (state = {}, action) => {
  state = action.data
  return state
}

const store = configureStore({reducer: storedData})

const SharedDistance = (data) => {
  store.dispatch({type: 'x', data: data})
}

const DistanceContext = createContext(0)

const DistanceContextProvider = (props) => {
  const [distance, setDistance] = useState(0)
  store.subscribe(() => {setDistance(store.getState())})
  return (
    <DistanceContext.Provider value={distance}>
      {props.children}
    </DistanceContext.Provider>
  )
}

export { DistanceContext, SharedDistance };
export default DistanceContextProvider;