import React, { useContext } from "react"
import cart from "../assets/cartIcon.png"
import { CartContext } from "../context/CartContext"



export function CartWidget() {
    const {cartQuantity} = useContext(CartContext)
    return ( cartQuantity() > 0 && 
        <div type="button" className="btn btn-success">
        <img src={cart}  className="navbar-brand" alt="cart" height="40"/>
        <span>{cartQuantity()}</span>
        </div>)
}
