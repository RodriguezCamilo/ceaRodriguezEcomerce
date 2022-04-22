import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Price from "./Price";


export default function ItemDetail({ id, title, detail, pictureUrl, stock, price }) {

    const { addItem, isInCart } = useContext(CartContext)


    const onAdd = (contador) => {
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
        <div className="container">
            <br/>
            <h2 className="card-title">{title}</h2>
            <hr/>
            <div className="card" style={{ "height": "70vh"}}>
            <div  className="row center" style={{ width: "80%"}}>
                <img className="col" src={pictureUrl} style={{ "maxWidth": "18rem" }} alt={title} />
                <div className="col align-self-center" style={{width:"50%"}}>
                    <p className="fs-5 fw-normal ">{detail}</p>
                    <h4 style={{marginTop:"10%"}}><Price amount={price}/></h4>
                    <h5>Stock disponible: {stock}</h5>
                    </div>
                    </div>
                <hr />

                {
                    !isInCart(id)
                        ? <ItemCount stock={stock} onAdd={onAdd} />
                        : <Link to="/cart" className="btn btn-success center" style={{"width": "20%"}}> Terminar mi compra </Link>
                }
                <br />
            </div>
            <br />
            <button className="btn btn-dark" onClick={handle}>Volver</button>
                

        </div>
    )
}