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
import Breweries from './pages/Breweries';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/breweries' element={<Breweries/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
