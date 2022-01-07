import React from "react";
import { useState, useEffect } from "react";
import BreweryList from "./BreweryList";
import DataCell from "./DataCell";
import BreweryMapWrapper from "./BreweryMap";
import DisplayBreweries from "./DisplayBreweries";


function SearchForm() {

    const [city, setCity] = useState('');
    const [breweries, setBreweries] = useState([]);
    const [isLoaded, setIsloaded] = useState(false);
    const [page, setPage] = useState(1);
    const [correctCity, setCorrectCity] = useState('');
    const [state, setState] = useState('');
    const [numOfBreweries, setNumOfBreweries] = useState(0);

    const searchBreweries = async () => {
        const query = { city, page, state };
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setNumOfBreweries(data[data.length-1].numOfBreweries)
        data.slice(0, -1)
        for (let el of data) {
            setBreweries(data, el);
        }

        // Sets variables for whether we've already searched, and the properly formatted city name
        setIsloaded(true);
        setCorrectCity(data[0].city)
        console.log(correctCity + " is loaded")
    }

    // Renders search bar
    if (isLoaded === false) {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="cityInput" className="form-label">Enter City:</label>
                    <input type="text"
                        className="form-control"
                        id="cityInput"
                        aria-describedby="cityHelp"
                        placeholder="Gondor"
                        value={city}
                        onChange={e => setCity(e.target.value)} />
                    <select value={state} onChange={e => setState(e.target.value)}>
                        <option value="alabama">Alabama</option>
                        <option value="alaska">Alaska</option>
                        <option value="arizona">Arizona</option>
                        <option value="arkansas">Arkansas</option>
                        <option value="california">California</option>
                        <option value="colorado">Colorado</option>
                        <option value="connecticut">Connecticut</option>
                        <option value="delaware">Delaware</option>
                        <option value="florida">Florida</option>
                        <option value="georgia">Georgia</option>
                        <option value="hawaii">Hawaii</option>
                        <option value="idaho">Idaho</option>
                        <option value="illinois">Illinois</option>
                        <option value="indiana">Indiana</option>
                        <option value="iowa">Iowa</option>
                        <option value="kansas">Kansas</option>
                        <option value="kentucky">Kentucky</option>
                        <option value="louisiana">Louisiana</option>
                        <option value="maine">Maine</option>
                        <option value="maryland">Maryland</option>
                        <option value="massachusetts">Massachusetts</option>
                        <option value="michigan">Michigan</option>
                        <option value="minnesota">Minnesota</option>
                        <option value="mississippi">Mississippi</option>
                        <option value="missouri">Missouri</option>
                        <option value="montana">Montana</option>
                        <option value="nebraska">Nebraska</option>
                        <option value="nevada">Nevada</option>
                        <option value="new hampshire">New Hampshire</option>
                        <option value="new jersey">New Jersey</option>
                        <option value="new mexico">New Mexico</option>
                        <option value="new york">New York</option>
                        <option value="north carolina">North Carolina</option>
                        <option value="north dakota">North Dakota</option>
                        <option value="ohio">Ohio</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="oregon">Oregon</option>
                        <option value="pennsylvania">Pennsylvania</option>
                        <option value="rhode island">Rhode Island</option>
                        <option value="south carolina">South Carolina</option>
                        <option value="south dakota">South Dakota</option>
                        <option value="tennessee">Tennessee</option>
                        <option value="texas">Texas</option>
                        <option value="utah">Utah</option>
                        <option value="vermont">Vermont</option>
                        <option value="virginia">Virginia</option>
                        <option value="washington">Washington</option>
                        <option value="west virginia">West Virginia</option>
                        <option value="wisconsin">Wisconsin</option>
                        <option value="wyoming">Wyoming</option>
                    </select>
                    <div id="cityHelp" className="form-text">See the breweries in your favorite cities!</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={searchBreweries}>Submit</button>
            </form>
        )

    } else {
        return (
            <div className="container">
                <DisplayBreweries breweries={breweries} correctCity={correctCity} searchBreweries={searchBreweries} numOfBreweries={numOfBreweries} state={state} />
                <BreweryMapWrapper breweries={breweries} />
            </div>
        )
    }

}

export default SearchForm;