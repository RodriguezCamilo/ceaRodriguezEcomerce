import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/Context";


export default function ItemDetail({ id, title, detail, pictureUrl, stock, price }) {

    const { addItem, isInCart } = useContext(CartContext)

    const [contador, setContador] = useState(1)

    const onAdd = () => {
        const itemToAdd = {
            id, title, price, pictureUrl, contador
        }
        addItem(itemToAdd)
    }

    const navigate = useNavigate()
    const handle = () => {
        navigate(-1)
    }


    return (
        <div>
            <div id="detail" className="card" style={{ width: "18rem" }}>
                <img src={pictureUrl} alt={title} />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{detail}</p>
                    <h5>${price}</h5>
                    <h5>Stock disponible: {stock}</h5></div>
                <hr />

                {
                    !isInCart(id)
                        ? <ItemCount stock={stock} onAdd={onAdd} contador={contador} setContador={setContador} />
                        : <Link to="/cart" className="btn btn-success"> Terminar mi compra </Link>
                }



                <br />
            </div>
            <hr />
            <button className="btn btn-dark" onClick={handle}>Volver</button>


        </div>
    )
}