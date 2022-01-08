import React from "react";
import { useState } from "react";
import BreweryList from "./BreweryList";
import DataCell from "./DataCell";
import BreweryMapWrapper from "./BreweryMap";
import Button from 'react-bootstrap/Button';

function DisplayBreweries({ breweries, correctCity, searchBreweries, numOfBreweries, state }) {

    //scroll to top of screen on re-render
    function scrollToTop() {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    const stateObj = {
        "alabama": "AL",
        "alaska": "AK",
        "arizona": "AZ",
        "arkansas": "AR",
        "california": "CA",
        "colorado": "CO",
        "connecticut": "CT",
        "delaware": "DE",
        "district of columbia": "DC",
        "florida": "FL",
        "georgia": "GA",
        "hawaii": "HI",
        "idaho": "ID",
        "illinois": "IL",
        "indiana": "IN",
        "iowa": "IA",
        "kansas": "KS",
        "kentucky": "KY",
        "louisiana": "LA",
        "maine": "ME",
        "maryland": "MD",
        "massachusetts": "MA",
        "michigan": "MI",
        "minnesota": "MN",
        "mississippi": "MS",
        "missouri": "MO",
        "montana": "MT",
        "nebraska": "NE",
        "nevada": "NV",
        "new hampshire": "NH",
        "new jersey": "NJ",
        "new mexico": "NM",
        "new york": "NY",
        "north carolina": "NC",
        "north dakota": "ND",
        "ohio": "OH",
        "oklahoma": "OK",
        "oregon": "OR",
        "pennsylvania": "PA",
        "rhode island": "RI",
        "south carolina": "SC",
        "south dakota": "SD",
        "tennessee": "TN",
        "texas": "TX",
        "utah": "UT",
        "vermont": "VT",
        "virginia": "VA",
        "washington": "WA",
        "west virginia": "WV",
        "wisconsin": "WI",
        "wyoming": "WY"
    }

    return (
        <div className="container">
            <div class="brewery-results-header">
                <div className="row">
                    <div class="col header-col-left">
                        <h1 className='display-1'>{correctCity}, {stateObj[state]}</h1>
                        <h1 className='display-1'>Breweries</h1>
                    </div>
                    <div class="col header-col-right brewery-data-cell">
                        <DataCell numOfBreweries={numOfBreweries} correctCity={correctCity} state={state} />
                    </div>
                </div>
            </div>

            <BreweryList breweries={breweries} />
            <Button variant="primary" onClick={scrollToTop}>Back To Top</Button>

            {/* search map section */}
            <div className='container brewery-map-container'>
                <h1 className='display-1'>Brewery Locations</h1>
                <BreweryMapWrapper breweries={breweries} />
            </div>

        </div>
    )

}

export default DisplayBreweries;