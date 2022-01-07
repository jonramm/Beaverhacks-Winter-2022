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
    const [endOfList, setEndOfList] = useState(false);
    const [correctCity, setCorrectCity] = useState('');
    const [state, setState] = useState('');

    const searchBreweries = async () => {

        const query = { city, page, state };
        console.log("State is: " + state)
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        for (let el of data) {
            setBreweries(data, el);
        }

        setIsloaded(true);
        setCorrectCity(data[0].city)

        // console.log(isLoaded)
        // console.log(page)
        // console.log(endOfList)
        // console.log(data.length)

        if (data.length === 50) {
            setPage(page + 1)
        } else {
            setEndOfList(true);
        }
    }

    
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
                        <option value="oregon">Oregon</option>
                        <option value="washington">Washington</option>
                    </select>
                    <div id="cityHelp" className="form-text">See the breweries in your favorite cities!</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={searchBreweries}>Submit</button>
            </form>
        )
    } else if (endOfList === false) {
        return (
            <DisplayBreweries breweries={breweries} correctCity={correctCity} searchBreweries={searchBreweries} />
            // <div className="container">
            //     <h1 className='display-1'>{correctCity} Breweries</h1>
            //     {/* <DataCell city={city} /> */}
            //     <BreweryList breweries={breweries} />
            //     <button type="button" className="btn btn-primary" onClick={searchBreweries}>More Breweries</button>

            //     {/* search map section */}
            //     <div className='container brewery-map-container'>
            //         <h1 className='display-1'>Brewery Locations</h1>
            //         <BreweryMapWrapper breweries={breweries} />
            //     </div>

            // </div>
        )
    } else if (endOfList === true) {
        return (
            <div className="container">
                <h1 className='display-1'>{correctCity} Breweries</h1>
                {/* <DataCell city={city} /> */}
                <BreweryList breweries={breweries} />
                <BreweryMapWrapper breweries={breweries} />
            </div>
        )
    }

}

export default SearchForm;