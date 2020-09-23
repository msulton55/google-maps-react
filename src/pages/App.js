import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

  return (
    <Router>
      <div className="container-fluid">
        <div className="row" style={scopeStyle}>
          <SidebarLayout>
            <Link to="/">
              <Button>Map</Button>
            </Link>
            <Link to="/about-me">
              <Button>About Me</Button>
            </Link>
          </SidebarLayout>

          <MainLayout>
            <Switch>
              <Route exact path="/">
                <MapContainer />
              </Route>
              <Route path="/about-me">
                <h1>test</h1>
              </Route>
            </Switch>
          </MainLayout>
        </div>
      </div>
    </Router>
  );
}

export default App;
