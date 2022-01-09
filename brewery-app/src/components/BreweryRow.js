import React from "react";

function BreweryRow({ data }) {
    let url = data.website_url;
    return (
        <tr>
            <td><a className="brewery-link" href={url} target="_blank">{data.name}</a></td>
            <td>{data.street}</td>
            <td>{data.phone}</td>
        </tr>
    )
}

export default BreweryRow;