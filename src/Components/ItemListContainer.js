import React from "react"

export function ItemList (props) {
    console.log(props)
    return (
        <ul>
            <li>Objeto: {props.item1} Precio: {props.precio}</li>
        </ul>
    )
}