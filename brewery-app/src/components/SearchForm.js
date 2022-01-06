import React from "react";
import { useState } from "react";
import BreweryList from "./BreweryList";

function SearchForm() {

    const [city, setCity] = useState('');
    const [breweries, setBreweries] = useState([]);
    const [isLoaded, setIsloaded] = useState(false);
    const [page, setPage] = useState(1);
    const [endOfList, setEndOfList] = useState(false);
    
    const searchBreweries = async ()=> {
        const query = {city, page};
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setBreweries(data);
        setIsloaded(true);
        if (data.length === 50) {
            setPage(page+1)
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
                        onChange={e => setCity(e.target.value)}/>
                    <div id="cityHelp" className="form-text">See the breweries in your favorite cities!</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={searchBreweries}>Submit</button>
            </form>
        ) 
    } else if (endOfList === false) {
        return (
            <div className="container">
                <h1 className='display-1'>Breweries</h1>
                <BreweryList breweries={breweries} />
                <button type="button" className="btn btn-primary" onClick={searchBreweries}>More Breweries</button>
            </div>
        )
    } else if (endOfList === true) {
        return (
            <div className="container">
                <h1 className='display-1'>Breweries</h1>
                <BreweryList breweries={breweries} />
            </div>
        )
    }
    
}

export default SearchForm;