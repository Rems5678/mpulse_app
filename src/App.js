import React from 'react';
import './styles/App.css';
import logo from "./assets/mpulse-mobile-01.png";
import PatientDashboard from './components/PatientDashboard';

function App() {
  return (
    <div className="App">
      <img src= {logo} alt="mpulse logo" className = "header-logo"/>
      <PatientDashboard></PatientDashboard>
    </div>
  );
}

export default App;
