import React from "react"
import {Cart} from "./CartWidget.js"

export function NavBar () {
    return (
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Tienda</a>
            <a href="#" className="cart"><Cart/></a>
        </nav>
    )
}

