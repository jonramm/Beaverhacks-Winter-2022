import React from "react";
import Nav from "react-bootstrap/Nav";

function HomeNav({ page }) {
    if (page === "Home") {
        return (
            <Nav.Link href="/" active>Home</Nav.Link>
        )
    } else {
        return (
            <Nav.Link href="/">Home</Nav.Link>
        )
    }
}

export default HomeNav;