import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";


export function Item({ item }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-center">
                <img src={item.pictureUrl} className="card-img-top" alt="..." />
            </div>
            <h5 className="card-title">{item.title}</h5>
            <Price amount={item.price}/>
            <hr />
            <Link to={`/detail/${item.id}`}><button type="button" className="btn btn-dark">Ver Mas</button></Link>
            <br />
        </div>
    )
}