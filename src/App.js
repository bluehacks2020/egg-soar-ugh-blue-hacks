import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from './component/Navigation';
import Footer from './component/Footer';
import HomePage from './component/pages/HomePage'
import LocationPage from './component/pages/LocationPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navigation />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <LocationPage />
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
