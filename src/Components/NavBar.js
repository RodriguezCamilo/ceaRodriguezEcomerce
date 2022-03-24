import React from "react"
import { Cart } from "./CartWidget.js"

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid  ">
                <a className="navbar-brand" href="#">Gaming Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Inicio</a>
                        <a className="nav-link" href="#">Tienda</a>
                        <a className="nav-link" href="#"><Cart /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

