import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import BreweryList from '../components/BreweryList';

function Home() {

    const key = "AIzaSyCGyHyprwTjmZ-cENr1NZDn8AEKHqpU3oY"

    //creating IP state
    const [ip, setIP] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [breweries, setBreweries] = useState([]);

    //creating function to load ip address from the API
    const getData = async () => {
        const res1 = await axios.get('https://api.ipify.org?format=json')
        setIP(res1.data.ip)
        const res2 = await axios.get(`http://ip-api.com/json/${ip}`)
        setLatitude(res2.data.lat)
        setLongitude(res2.data.lon)
        console.log(latitude)
        console.log(longitude)

    }

    const searchBreweries = async () => {
        const res = await axios.get(`https://api.openbrewerydb.org/breweries?per_page=10&by_dist=${latitude},${longitude}`)
        setBreweries(res.data)
    }

    // const searchBreweries = async () => {
    //     const query = { latitude, longitude };
    //     const response = await fetch('/geo', {
    //         method: 'POST',
    //         body: JSON.stringify(query),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     const data = await response.json();
    //     setBreweries(data);
    // }

    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()
        searchBreweries()
    }, [latitude, longitude])

    

    return (
        <div>
            <Navbar />
            <div className="HomePageText">
                <h1>Home Page</h1>
                <Link to='/breweries'>
                    <Button variant="primary">Go to breweries</Button>
                </Link>
                <div>
                    <h1>Breweries Close To You:</h1>
                    <BreweryList breweries={breweries} />
                </div>

            </div>
        </div>
    )
}

export default Home;