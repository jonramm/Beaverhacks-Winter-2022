import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function pageNavbar() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Brewery Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" />
                <Navbar.Collapse id="navbarColor01">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active>Home</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/breweries">Search By City</NavDropdown.Item>
                            <div class="dropdown-divider"></div>
                            <NavDropdown.Item href="">Brewery Data</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default pageNavbar;