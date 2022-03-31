import React from "react";
import { Link } from "react-router-dom";


export function Item({ item }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-center">
                <img src={item.pictureUrl} className="card-img-top" alt="..." />
            </div>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">${item.price}</p>
            <hr />
            <Link to={`/detail/${item.id}`}><button type="button" className="btn btn-dark">Ver Mas</button></Link>
            <br />
        </div>
    )
}