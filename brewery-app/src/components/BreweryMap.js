import React, { useState, useEffect, useRef } from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ';
import 'ol/ol.css';
import marker from './map-marker.png';

const BreweryMapWrapper = ({ breweries }) => {
  
  // Set initial state - used to track references to OpenLayers 
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const [selectedCoord, setSelectedCoord] = useState();
  
  // Keep a ref to div element - OpenLayers will render into this div 
  const mapElement = useRef();
  
  
  // Initialize map on first render 
  useEffect(() => {
    // Create markers 
    const breweryIcon = new Feature({
      geometry: new Point([breweries[0].longitude, breweries[0].latitude]),
      name: 'Brewery1',
    });
    
    // Set marker style 
    var iconStyle = new Style({
      image: new Icon({
        imgSize: [100, 100],
        src: marker
      })
    });
    breweryIcon.setStyle(iconStyle);
    
    const breweryIcon2 = new Feature({
      geometry: new Point([breweries[1].longitude, breweries[1].latitude]),
      name: 'Brewery2',
    });
    
    // Set marker style 
    var iconStyle2 = new Style({
      image: new Icon({
        imgSize: [100, 100],
        src: marker
      })
    });
    breweryIcon2.setStyle(iconStyle2);
    
    // Create vector source 
    const vectorSource = new VectorSource({
      features: [breweryIcon, breweryIcon2]
    })
    
    // Create and add vector source layer 
    const initialFeaturesLayer = new VectorLayer({
      source: vectorSource,
    });
    
    // TileLayer: USGS Topo 
    const tileLayer = new TileLayer({
      source: new XYZ({
        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
      })
    });
    
    // Create map 
    const initialMap = new Map({
      target: mapElement.current,
      layers: [tileLayer, initialFeaturesLayer],
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
    
    const features = initialFeaturesLayer.getSource().getFeatures()
    console.log(features)
  }, []);
  
  return (
    <div ref={mapElement} className="search-map">
      
    </div>
  )
}

export default BreweryMapWrapper;