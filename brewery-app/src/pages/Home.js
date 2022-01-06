import '../App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';

function Home() {

    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <Link to='/breweries'>Go to breweries</Link>
        </div>
    )
}

export default Home;