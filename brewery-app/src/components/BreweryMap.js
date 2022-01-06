import React, { useState, useEffect, useRef } from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';

const BreweryMapWrapper = ({ breweries }) => {
  
  // Set initial state - used to track references to OpenLayers 
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer ] = useState();
  const [ selectedCoord, setSelectedCoord ] = useState();
  
  // Keep a ref to div element - OpenLayers will render into this div 
  const mapElement = useRef();
  
  // Initialize map on first render 
  useEffect(() => {
    console.log(breweries[0].latitude);
    // Create and add vector source layer 
    const initialFeaturesLayer = new VectorLayer({
      source: new VectorSource()
    });
    
    // Create map 
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        // USGS Topo 
        new TileLayer({
          source: new XYZ({
            url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
          })
        }),
        
        initialFeaturesLayer
        
      ],
      view: new View({
        projection: 'EPSG:4326', // lon/lat coordinates project 
        center: [breweries[0].longitude, breweries[0].latitude],
        zoom: 12
      }),
      controls: []
    })
    
    // Save map and vector layer references to state 
    setMap(initialMap);
    setFeaturesLayer(initialFeaturesLayer);
  }, []);
  
  return (
    <div ref={mapElement} className="search-map">
      
    </div>
  )
}

export default BreweryMapWrapper;