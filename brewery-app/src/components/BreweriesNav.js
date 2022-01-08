import React from "react";
import Nav from "react-bootstrap/Nav";

function BreweriesNav({ page }) {
    if (page === "Breweries") {
        return (
            <Nav.Link href="/breweries" active>Search By City</Nav.Link>
        )
    } else {
        return (
            <Nav.Link href="/breweries">Search By City</Nav.Link>
        )
    }
}

export default BreweriesNav;