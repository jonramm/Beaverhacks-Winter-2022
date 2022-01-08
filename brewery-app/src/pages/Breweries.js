import '../App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from '../components/BreweryList';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/pageNavbar';


function Breweries() {
  
  return (
        <div>
            <Navbar />
            <div className="container">
            <SearchForm />
            </div> 
        </div>
        
    )
}

export default Breweries;