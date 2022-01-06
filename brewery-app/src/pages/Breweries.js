import '../App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from '../components/BreweryList';

function Breweries() {

    // testing api call
    const [breweries, setData] = useState(null);

    const loadBreweries = async ()=> {
        const response = await fetch("/api");
        const data = await response.json();
        setData(data);
    }

    useEffect(()=> {
        loadBreweries();
    }, [])

    // useEffect(()=> {
    //     fetch("/api")
    //         // .then((res)=> res.json())
    //         .then((data)=> setData(data));
    // }, []);
    //

    return (
        <div>
            <h1>Breweries</h1>
            <BreweryList breweries={breweries}/>
        </div>
    )
}

export default Breweries;