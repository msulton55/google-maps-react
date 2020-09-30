import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SidebarLayout from '../layouts/SidebarLayout/index';
import MainLayout from '../layouts/MainLayout/index';
import MapContainer from '../components/GoogleMaps/MapContainer/index';
import Button from '../components/Button/index';
import StatusInfo from '../components/StatusInfo/index';
import CoordinateContextProvider from '../context/CoordinateContext';
import DistanceContextProvider from '../context/DistanceContext';

const App = () => {
  console.log("App render")

  return (
    <Router>
      <div className="container-fluid">
        <div className="row align-items-center">
          <SidebarLayout>
            <h1 className="mb-5 text-center">Click Location Game</h1>
            <Button lists={["Main map", "How to play"]} />
            <CoordinateContextProvider>
              <DistanceContextProvider>
                <StatusInfo />
              </DistanceContextProvider>
            </CoordinateContextProvider>
          </SidebarLayout>

          <MainLayout>
            <Switch>
              <Route exact path="/">
                <MapContainer />
              </Route>
              <Route path="/about-me">
                <h1>test</h1>
                {console.log("About-me Render")}
              </Route>
            </Switch>
          </MainLayout>
        </div>
      </div>
    </Router>
  );
}

export default App;
