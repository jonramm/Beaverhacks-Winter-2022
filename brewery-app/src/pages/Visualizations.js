import '../App.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/pageNavbar';
import VisualizationByCity from '../components/VisualizationByCity';
import VisualizationMap from '../components/VisualizationMap';

function Visualizations() {
  return (
    <div className="page-container">
      <Navbar />
      <VisualizationByCity />
      <VisualizationMap />
    </div>
  )
}

export default Visualizations;