import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, cartTotal, emptyCart, removeItem, cartQuantity } = useContext(CartContext)

    return (
        cartQuantity() > 0 
        ? <div className="container my-5">
            <h1>Resumen de tu compra</h1>
            <hr />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img style={{height: "100px"}} src={item.pictureUrl}/>
                        <p>Cantidad: {item.contador}</p>
                        <h5>Precio: ${item.price * item.contador}</h5>
                        <button className="btn btn-danger" onClick={()=> removeItem(item.id)}>Eliminar</button>
                        <hr />
                    </div>
                ))
            }
            <h3>TOTAL: ${cartTotal()}</h3>
            <hr/>

            <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
        </div>
        : <div className="container my-5">
            <h1>No elegiste nada!</h1>
            <hr />
            <h5>Vuelva a la tienda para poder elegir algun producto</h5>
            <br/>
            <Link to={`/`}><button type="button" className="btn btn-success">Tienda</button></Link>
            </div>
    )
}