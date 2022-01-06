import React from "react";
import { useState } from "react";

function SearchForm() {

    const [city, setCity] = useState('');
    
    const searchBreweries = async ()=> {
        const query = {city};
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json',
            },
        });

    }

    return (
        <form>
            <div className="mb-3">
                <label for="cityInput" className="form-label">Enter City:</label>
                <input type="text" className="form-control" id="cityInput" aria-describedby="cityHelp" />
                <div id="cityHelp" className="form-text">See the breweries in your favorite cities!</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SearchForm;