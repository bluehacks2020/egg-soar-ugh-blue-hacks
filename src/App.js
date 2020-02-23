import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './component/Navigation';
import Footer from './component/Footer';
import HomePage from './component/pages/HomePage'
import LocationPage from './component/pages/LocationPage'
import ProfilePage from './component/pages/ProfilePage'
import ConfirmedPage from './component/pages/ConfirmedPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navigation />
        <Switch>
          <Route exact path="/location">
            <LocationPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/confirmation">
            <ConfirmedPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
