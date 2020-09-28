import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SidebarLayout from '../layouts/SidebarLayout/index';
import MainLayout from '../layouts/MainLayout/index';
import MapContainer from '../components/GoogleMaps/MapContainer/index';
import Button from '../components/Button/index';

const App = () => {
  const scopeStyle = {
    alignItems: "center"
  }

  console.log("App render")

  return (
    <Router>
      <div className="container-fluid">
        <div className="row" style={scopeStyle}>
          <SidebarLayout>
            <Button lists={["Map", "About Me"]} />
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
