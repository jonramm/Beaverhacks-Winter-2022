import '../App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';
import Button from 'react-bootstrap/Button';

function Home() {

    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <Link to='/breweries'>
                <Button variant="warning">Go to breweries</Button>
            </Link>
        </div>
    )
}

export default Home;