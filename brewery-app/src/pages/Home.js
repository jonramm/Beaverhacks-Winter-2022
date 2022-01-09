import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import BreweryList from '../components/BreweryList';
import bar from '../images/bar.jpg';
import icon from '../images/hophub-icon-cropped.png'
import BreweryListHomePage from '../components/BreweryListHomePage';

function Home() {

    //creating IP, coordinate, and breweries state
    const [ip, setIP] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [breweries, setBreweries] = useState([]);
    const page = "Home";

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

    // Call data get functions on render
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
            <Navbar page={page}/>
            <div class="home-content">
                <div class="home-row">
                    <img class="background-image" src={bar}></img>
                    <div class="welcome-div">
                        <img class="icon-img" src={icon}></img>
                        <br />
                        <div className="page-button">
                            <Link to='/breweries'>
                                <Button variant="primary">Search By City</Button>
                            </Link>
                        </div>
                        <p class="brewery-list-text" onClick={showModal}>Or look at a list of breweries near your location</p>
                    </div>
                </div>
            </div>
            <div className="home-modal">
                <div id="modal-backdrop" className="hidden"></div>
                <div id="brewery-list-modal" className="hidden">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Breweries Close To You:</h2>
                            <Button variant="primary" onClick={hideModal}>X</Button>
                        </div>

                        <div className="modal-body">
                            <div className="brewery-list">
                                <BreweryListHomePage breweries={breweries} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer bg-primary">
                <h3 id="footerText">© Hop Boyz 2022</h3>
            </div>
        </div>
    )
}

export default Home;