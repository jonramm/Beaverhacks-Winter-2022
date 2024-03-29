import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import hopper from "../images/hophubhopper-right.png"
import HomeNav from "./HomeNav";
import BreweriesNav from "./BreweriesNav";
import AboutNav from "./AboutNav";

function PageNavbar ({ page }) {

    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container fluid>
                <img className="hopper" src={hopper}></img>
                <Navbar.Brand href="/">HopHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <HomeNav page={page} />
                        <BreweriesNav page={page} />
                        <AboutNav page={page} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PageNavbar;