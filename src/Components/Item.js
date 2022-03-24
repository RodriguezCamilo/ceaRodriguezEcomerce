import React from "react";
import ItemCount from "./ItemCount";

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
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}