import React, { useContext } from "react"
import cart from "../assets/cartIcon.png"
import { CartContext } from "../context/CartContext"



export function CartWidget() {
    const {cartQuantity} = useContext(CartContext)
    return ( cartQuantity() > 0 && 
        <div>
        <img src={cart}  className="navbar-brand" height="40"/>
        <span>{cartQuantity()}</span>
        </div>)
}
