import React from "react";
import ItemCount from "./ItemCount";

const onAdd = () => {
    alert("Compraste sillas")
}

export function Item({item}) {
    console.log(item)
    return (
        <div id="Card">
            <div className="data">
                <div> Producto: {item.title} </div>
                <div> Precio: {item.price}</div>
                <img src={item.pictureUrl} />
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}