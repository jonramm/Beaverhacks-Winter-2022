import React from "react";

function BreweryRowHomePage({ data }) {
    let url = data.website_url;
    return (
        <tr>
            <td><a className="brewery-data" href={url} target="_blank">{data.name}</a></td>
            <td>{data.street}</td>
            <td>{data.city}</td>
            <td>{data.phone}</td>
        </tr>
    )
}

export default BreweryRowHomePage;