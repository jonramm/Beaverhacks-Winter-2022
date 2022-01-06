import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Breweries from './pages/Breweries';
import Home from './pages/Home';

function App() {
  
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='breweries' element={<Breweries />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
