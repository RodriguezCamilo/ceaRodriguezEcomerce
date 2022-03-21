import React from "react"
import ItemCount from "./ItemCount.js"

const onAdd = () => {
    alert("Compraste sillas")
}

export function ItemList(props) {
    console.log(props)
    return (
        <div id="Card">
            <div className="data">
                <div>Objeto: {props.item1}</div>
                <div>Precio: {props.precio}</div>
            </div>
            
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}