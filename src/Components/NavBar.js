import React from "react"
import {Cart} from "./CartWidget.js"

export function NavBar () {
    return (
        <nav>
            <a className="link" href="#">Inicio</a>
            <a className="link" href="#">Tienda</a>
            <a href="#" className="cart"><Cart/></a>
        </nav>
    )
}

