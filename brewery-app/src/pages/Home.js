import '../App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from '../components/BreweryList';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <h1>Home Page</h1>
            <Link to='/breweries'>Go to breweries</Link>
        </div>
    )
}

export default Home;