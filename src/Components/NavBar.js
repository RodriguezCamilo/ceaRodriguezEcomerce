import React from "react"
import { Cart, CartWidget } from "./CartWidget.js"
import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                
                <div className="nav navbar-nav justify-content-end">
                <Link className="navbar-brand" to="/"><h2>Gaming Shop</h2></Link>
                <Link className="nav-link" to="/cart"><CartWidget /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Inicio</Link>
                            <Link className="nav-link" to="/asd">Tienda</Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/category/sillas" >Sillas</Link></li>
                                    <li><Link className="dropdown-item" to="/category/mouses" >Mouses</Link></li>
                                    <li><Link className="dropdown-item" to="/category/auriculares" >Auriculares</Link></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

