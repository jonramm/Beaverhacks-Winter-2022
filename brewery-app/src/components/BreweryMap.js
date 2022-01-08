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
import Overlay from 'ol/Overlay';
import { defaults, ZoomSlider } from 'ol/control';

const BreweryMapWrapper = ({ breweries }) => {
  
  // Set initial state - used to track references to OpenLayers 
  const [map, setMap] = useState();
  const [popup, setPopup] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const [selectedCoord, setSelectedCoord] = useState();
  
  // Keep a ref to div element - OpenLayers will render into this div 
  const mapElement = useRef();
  const popupElement = useRef();
  
  const mapRef = useRef();
  mapRef.current = map;
  
  // Event handler for Map clicks: Shows popup if a brewery is clicked 
  const handleMapClick = function (event) {
    
    // Get the brewery if it's been clicked 
    const feature = mapRef.current.forEachFeatureAtPixel(event.pixel, function(feature) {
      return feature;
    });
    
    // If a brewery has been clicked...
    if (feature) {
      
      // Get the popup OpenLayers element 
      let popupOverlay = event.map.overlays_.array_[0];
      popupOverlay.element.style.display = "block";
      // Set the position on the map of the popup 
      popupOverlay.setPosition(event.coordinate);
      
      // Set the text to be the name of the brewery 
      popupOverlay.element.innerText = feature.get('name');
      popupOverlay.element.style.background = 'white';
      popupOverlay.element.style.padding = "10px";
      
      // Add address as a child node 
      let addressElement = document.createElement("p");
      addressElement.innerText = feature.get('street');
      popupOverlay.element.appendChild(addressElement);
      
    } 
    // Remove the brewery popup if somewhere else on the map is clicked 
    else {
      let popupOverlay = event.map.overlays_.array_[0];
      popupOverlay.element.style.display = 'none';
    }
  }

  // Initialize map on first render 
  useEffect(() => {
  
    // Create a marker for each brewery in "breweries" array 
    const breweryIcons = breweries.map((brewery) => {
      // Create Feature 
      let currentIcon = new Feature({
        geometry: new Point([brewery.longitude, brewery.latitude]),
        name: brewery.name,
        street: brewery.street,
      });
      
      // Set Icon style 
      let iconStyle = new Style({
        image: new Icon({
          imgSize: [100, 100],
          src: marker
        })
      });
      
      // Set style 
      currentIcon.setStyle(iconStyle);
      
      return currentIcon;
    });
    
    // Create vector source 
    const vectorSource = new VectorSource({
      features: breweryIcons
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
    });
    
    // Add zoom control 
    const zoomSlider = new ZoomSlider();
    initialMap.addControl(zoomSlider);
    
    // Create Popup 
    const popup = new Overlay({
      element: popupElement.current,
      positioning: 'bottom-center',
      stopEvent: false,
    });
    setPopup(popup);
    initialMap.addOverlay(popup);
    
    // Save map and vector layer references to state 
    setMap(initialMap);
    setFeaturesLayer(initialFeaturesLayer);
    
    // Event handler 
    initialMap.on('click', handleMapClick);
  }, []);
  
  return (
    <div ref={mapElement} className="search-map">
      <div ref={popupElement} className="popup"></div>
    </div>
  )
}

export default BreweryMapWrapper;