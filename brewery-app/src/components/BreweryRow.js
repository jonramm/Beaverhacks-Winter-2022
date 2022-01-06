import React from "react";

function BreweryRow({ data }) {
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.street}</td>
        </tr>
    )
}

export default BreweryRow;