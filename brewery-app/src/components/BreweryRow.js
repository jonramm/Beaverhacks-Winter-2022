import React from "react";

function BreweryRow({ data }) {
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.street}</td>
            <td>{data.website_url}</td>
        </tr>
    )
}

export default BreweryRow;