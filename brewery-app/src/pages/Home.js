import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import BreweryList from '../components/BreweryList';
import icon from '../images/hophub-icon.png';
import bar from '../images/bar.jpg';

function Home() {

    //creating IP, coordinate, and breweries state
    const [ip, setIP] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [breweries, setBreweries] = useState([]);

    //creating function to load ip address and get coordinates
    const getData = async () => {
        const res1 = await axios.get('https://api.ipify.org?format=json')
        setIP(res1.data.ip)
        const res2 = await axios.get(`http://ip-api.com/json/${ip}`)
        setLatitude(res2.data.lat)
        setLongitude(res2.data.lon)
    }

    // Searches breweries by geo coordinates
    const searchBreweries = async () => {
        const res = await axios.get(`https://api.openbrewerydb.org/breweries?per_page=10&by_dist=${latitude},${longitude}`)
        setBreweries(res.data)
    }

    useEffect(() => {
        getData()
        searchBreweries()
    }, [latitude, longitude])

    function showModal() {

        var modal = document.getElementById('brewery-list-modal');
        var modalBackdrop = document.getElementById('modal-backdrop');
      
        modal.classList.remove('hidden');
        modalBackdrop.classList.remove('hidden');
    }

    function hideModal() {

        var modal = document.getElementById('brewery-list-modal');
        var modalBackdrop = document.getElementById('modal-backdrop');
      
        modal.classList.add('hidden');
        modalBackdrop.classList.add('hidden');
    }

    return (
        <div>
            <Navbar />
            <div class="home-content">
                <div class="home-row">
                    <img class="background-image" src={bar}></img>
                    <div class="welcome-div">
                        <h1 class="header-text">HopHub</h1>
                        <img class="icon-img" src={icon}></img>
                        <br />
                        <div class="page-button">
                            <Link to='/breweries'>
                                <Button variant="primary">Search By City</Button>
                            </Link>
                        </div>
                        <p class="brewery-list-text" onClick={showModal}>Or look at a list of breweries near your location</p>
                    </div>
                </div>
            </div>
            <div class="home-modal">
                <div id="modal-backdrop" class="hidden"></div>
                <div id="brewery-list-modal" class="hidden">
                    <div class="modal-header">
                        <h2>Breweries Close To You:</h2>
                        <button type="button" id="modal-close" class="modal-hide-button" onClick={hideModal}>&times;</button>
                    </div>

                    <div class="modal-body">
                        <div class="brewery-list">
                            <BreweryList breweries={breweries} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer bg-primary">
                <h3>© Our team 2022</h3>
            </div>
        </div>
    )
}

export default Home;