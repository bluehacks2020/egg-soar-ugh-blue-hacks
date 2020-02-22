import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from './component/SampleComponent';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navigation />
        <Switch>
        </Switch>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
