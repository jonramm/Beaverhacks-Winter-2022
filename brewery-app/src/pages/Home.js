import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import BreweryList from '../components/BreweryList';

function Home() {

    //creating IP state
    const [ip, setIP] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [breweries, setBreweries] = useState([]);

    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
        setLatitude(res.data.latitude)
        setLongitude(res.data.longitude)
        console.log(latitude)
        console.log(longitude)
    }

    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()
        searchBreweries()
    }, [latitude, longitude])

    const searchBreweries = async () => {
        const query = { latitude, longitude };
        const response = await fetch('/geo', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setBreweries(data);
    }

    return (
        <div>
            <Navbar />
            <div className="HomePageText">
                <h1>Home Page</h1>
                <Link to='/breweries'>
                    <Button variant="primary">Go to breweries</Button>
                </Link>
                <div>
                    {/* <h1>Breweries Close To You:</h1> */}
                    {/* <BreweryList breweries={breweries} /> */}
                </div>

            </div>
        </div>
    )
}

export default Home;