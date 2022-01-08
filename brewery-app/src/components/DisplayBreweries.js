import React from "react";
import { useState } from "react";
import BreweryList from "./BreweryList";
import DataCell from "./DataCell";
import BreweryMapWrapper from "./BreweryMap";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function DisplayBreweries({ breweries, correctCity, searchBreweries, numOfBreweries, state }) {

    // state name/abbreviation table
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

    //scroll to top of screen function
    function scrollToTop() {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="container">
            <div className="brewery-results-header">
                <div className="row">
                    <div className="col header-col-left">
                        <h1>{correctCity}, {stateObj[state]}</h1>
                        <h1>Breweries</h1>
                    </div>
                    <div className="col header-col-right brewery-data-cell">
                        <DataCell numOfBreweries={numOfBreweries} correctCity={correctCity} state={state} />
                    </div>
                </div>
            </div>
            <BreweryList breweries={breweries} />
            <div className="button">
                <Button variant="primary" onClick={scrollToTop}>Back To Top</Button>
            </div>
            <div className="button">
                <a href="/breweries">
                    <Button variant="primary">Search Again</Button>
                </a>
            </div>
            {/* search map section */}
            <div className='container brewery-map-container'>
                <h1>Brewery Locations</h1>
                <BreweryMapWrapper breweries={breweries} />
            </div>
        </div>
    )

}

export default DisplayBreweries;