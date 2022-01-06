import '../App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from '../components/BreweryList';

function Breweries() {

    // testing api call
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch("/api")
            .then((res)=> res.json())
            .then((data)=> setData(data));
    }, []);
    //

    return (
        <div>
            <h1>Breweries</h1>
            <BreweryList breweries={data}/>
        </div>
    )
}

export default Breweries;