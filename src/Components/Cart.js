import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import Price from "./Price";

export const Cart = () => {
    const { cart, cartTotal, emptyCart, removeItem, cartQuantity } = useContext(CartContext)

    return (
        <div className="d-flex justify-content-center">{
            cartQuantity() > 0
                ? <div className="card my-5" style={{width: "90vw"}}>
                    <br/>
                    <h1>Resumen de tu compra</h1>
                    <hr />
                    {
                        cart.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <img style={{ height: "100px" }} src={item.pictureUrl} />
                                <h5>Cantidad: {item.contador}</h5>
                                
                                <h5>Precio: <Price amount={item.price * item.contador} /></h5>
                                
                                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
                                <hr />
                            </div>
                        ))
                    }
                    <h3>TOTAL: <Price amount={cartTotal()}/></h3>
                    <hr />

                    <button className="btn btn-danger"  onClick={emptyCart}>Vaciar carrito</button>
                </div>

                : <div className="container my-5">
                    <h1>No elegiste nada!</h1>
                    <hr />
                    <h5>Vuelva a la tienda para poder elegir algun producto</h5>
                    <br />
                    <Link to={`/`}><button type="button" className="btn btn-success">Tienda</button></Link>
                </div>}
        </div>
    )
}