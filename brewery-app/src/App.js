import 'bootswatch/dist/united/bootstrap.min.css'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Breweries from './pages/Breweries';
import Home from './pages/Home';
import About from './pages/About';
import Visualizations from './pages/Visualizations';

function App() {
  
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/breweries' element={<Breweries />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/visualizations' element={<Visualizations />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
