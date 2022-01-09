import '../App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

function VisualizationMap() {
  
  const createMap = async () => {
    
    const geoJsonResponse = await axios.get('/api/breweries-geojson');
    var geoData = await geoJsonResponse.data;
    
    var margin = 100;
    var width = 860;
    var height = 700;
    
    // Map of breweries 
    var svg = d3.select("#brewery-map")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
        
    var path = d3.geoPath();
    var projection = d3.geoMercator()
      .center([-101, 47])
      .translate([width / 2, height / 2])
      .scale([width * 0.6]);
    
    // var map = d3.map();
  
    svg.append("g")
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath()
        .projection(projection))
      .attr("fill", "blue")
      .attr("stroke", "#FFF")
      .attr("stroke-width", 0.5)
  }
  
  useEffect(() => {
    createMap();
  }, [])
  
  return (
    <div className="visualization-map-container">
      <h3>Distribution of Breweries</h3>
      <div id="brewery-map"></div>
    </div>
  )
}

export default VisualizationMap;