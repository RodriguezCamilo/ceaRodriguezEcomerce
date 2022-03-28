import React from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const onAdd = () => {
    alert("Compraste sillas")
}




export default function ItemDetail(items) {

    const navigate = useNavigate()
    const handle = () => {
        navigate(-1)
    }


    return (
        <div>
            <div id="detail" className="card" style={{ width: "18rem" }}>
                <img src={items.pictureUrl} />
                <div className="card-body">
                    <h3 className="card-title">{items.title}</h3>
                    <p className="card-text">{items.detail}</p>
                    <h5>{items.price}</h5>
                    <h5>Stock disponible: {items.stock}</h5></div>
                <hr />
                <ItemCount initial={1} stock={items.stock} onAdd={onAdd} />
            </div>
            <hr />
            <button className="btn btn-dark" onClick={handle}>Volver</button>
        </div>
    )
}