import React from "react";
import { useState } from "react";
import BreweryList from "./BreweryList";
import DataCell from "./DataCell";
import BreweryMapWrapper from "./BreweryMap";


function SearchForm() {

    const [city, setCity] = useState('');
    const [breweries, setBreweries] = useState([]);
    const [isLoaded, setIsloaded] = useState(false);
    const [page, setPage] = useState(1);
    const [endOfList, setEndOfList] = useState(false);
    const [correctCity, setCorrectCity] = useState('');
    
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
        setCorrectCity(data[0].city)

        console.log(isLoaded)
        console.log(page)
        console.log(endOfList)
        console.log(data[0])

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