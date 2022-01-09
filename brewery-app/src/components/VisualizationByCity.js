import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

function VisualizationByCity() {
  
  const [breweries, setBreweries] = useState([]);
  
  const loadBreweries = async () => {
    
    // Get dataset from backend endpoint
    const response = await axios.get('/api/breweries-by-state');
    const data = await response.data;
    
    // Helper function to calculate max value 
    const getMax = () => {
      let max = 0;
      data.forEach((row) => {
        if (row.count > max) { max = row.count}
      });
      return max;
    }
    
    // Create Axes 
    // var scale = d3.scaleLinear()
    //               .domain([0, 500])
    //               .range([height / 2, 0])
    // 
    // var y_axis = d3.axisLeft()
    //               .scale(scale);
    // 
    // d3.select("#BarChart")
    //   .append("svg")
    //   .attr("transform", "translate(50, 10)")
    //   .call(y_axis);
    // 
    // var height = getMax();
    
    // Create each of the bars and then set them all to have the same height (which is the max value)
    d3.select("#BarChart")
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .classed('bar', true)
      .style('height', `${getMax()}px`)
      
    // Transition the bars into having a height based on their corresponding count value 
    d3.select("#BarChart")
      .style('display', 'flex')
      .style('align-items', 'flex-end')
      .style('justify-content', 'center')
      .selectAll('.bar')
      .transition()
      .duration(1000)
      .style('height', bar => `${bar.count}px`)
      .style('width', '100px')
      .style('margin-right', '10px')
      .style('margin-left', '10px')
      .style('background-color', '#E95538')
      .delay(300)
      
    // Add text to the bottom of each bar 
    d3.select("#BarChart")
      .selectAll(".bar")
      .style("position", "relative")
      .append("p")
      .text(row => row.count + " breweries")
      .style("font-size", "16px")
      .style("position", "absolute")
      .style("top", "-20px")
      
  d3.select("#BarChart")
    .selectAll(".bar")
    .append("p")
    .text(row => row.state)
    .style("font-size", "16px")
    .style("position", "absolute")
    .style("bottom", "-50px")
    
  }
  
  useEffect(() => {
    loadBreweries();
  }, []);
  
  return (
    <div className="visualization-by-city-container">
      <h3 className="visualization-by-city-title">States With the Most Breweries</h3>
      <div id="Brewery"></div>
      <div id="BarChart"></div>
    </div>
  )
}

export default VisualizationByCity;