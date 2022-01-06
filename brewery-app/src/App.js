import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from './components/BreweryList'
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route path='breweries'></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
