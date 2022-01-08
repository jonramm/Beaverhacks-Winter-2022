import React from "react";
import Nav from "react-bootstrap/Nav";

function AboutNav({ page }) {
    if (page === "about") {
        return (
            <Nav.Link href="/about">About</Nav.Link>
        )
    } else {
        return (
            <Nav.Link href="/about">About</Nav.Link>
        )
    }
}

export default AboutNav;