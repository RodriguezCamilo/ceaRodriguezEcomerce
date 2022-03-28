import React from "react";
import ItemCount from "./ItemCount";

const onAdd = () => {
    alert("Compraste sillas")
}

export default function ItemDetail(items) {
    return (
        <div id="detail" className="card" style={{width: "18rem"}}>
            <img src={items.pictureUrl}/>
            <div className="card-body">
            <h3 className="card-title">{items.title}</h3>
            <p className="card-text">{items.detail}</p>
            <h5>{items.price}</h5>
            <h5>Stock disponible: {items.stock}</h5></div>
            <hr/>
            <ItemCount initial={1} stock={items.stock} onAdd={onAdd} />
        </div>
    )
}