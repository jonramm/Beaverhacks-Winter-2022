import React from "react";
import { useState } from "react";
import BreweryList from "./BreweryList";
import DataCell from "./DataCell";
import BreweryMapWrapper from "./BreweryMap";

function DisplayBreweries({ breweries, correctCity, searchBreweries }) {


    return (
        <div className="container">
            <h1 className='display-1'>{correctCity} Breweries</h1>
            {/* <DataCell city={city} /> */}
            <BreweryList breweries={breweries} />
            <button type="button" className="btn btn-primary" onClick={searchBreweries}>More Breweries</button>

            {/* search map section */}
            <div className='container brewery-map-container'>
                <h1 className='display-1'>Brewery Locations</h1>
                <BreweryMapWrapper breweries={breweries} />
            </div>

        </div>
    )

}

export default DisplayBreweries;