import './App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from './BreweryList';

function Home() {

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