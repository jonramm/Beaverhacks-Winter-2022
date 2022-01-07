import React from "react";
import { useState } from "react";
import BreweryList from "./BreweryList";
import DataCell from "./DataCell";
import BreweryMapWrapper from "./BreweryMap";

function DisplayBreweries({ breweries, correctCity, searchBreweries }) {

    //scroll to top of screen on re-render
    function scrollToTop() {
        window.scroll({top:0,behavior:'smooth'})
    }

    return (
        <div className="container">
            <h1 className='display-1'>{correctCity} Breweries</h1>
            {/* <DataCell city={city} /> */}
            <BreweryList breweries={breweries} />
            <button type="button" className="btn btn-primary" onClick={()=> {searchBreweries();scrollToTop();}}>More Breweries</button>

            {/* search map section */}
            <div className='container brewery-map-container'>
                <h1 className='display-1'>Brewery Locations</h1>
                <BreweryMapWrapper breweries={breweries} />
            </div>

        </div>
    )

}

export default DisplayBreweries;