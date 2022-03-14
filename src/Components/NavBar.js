import React from "react"
import {Cart} from "./CartWidget.js"

export function NavBar () {
    return (
        <nav>
            <a>Inicio</a>
            <a>Tienda</a>
            <a className="cart"><Cart/></a>
        </nav>
    )
}

