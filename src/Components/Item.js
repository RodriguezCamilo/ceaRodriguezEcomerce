import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const onAdd = () => {
    alert("Compraste sillas")
}

export function Item({ item }) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={item.pictureUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                </div>
                <hr/>
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
            <br/>
            <Link to={`/detail/${item.id}`}><button type="button" className="btn btn-dark">Ver Mas</button></Link>
        </div>
    )
}