import React from "react"
import { useState } from "react"


const ItemCount = ({ stock = 10, onAdd }) => {

    const [contador, setContador] = useState(1)

    const sum = () => {
        if (contador === stock) {
            return
        }
        setContador(contador + 1)
    }

    const res = () => {
        if (contador === 1) {
            return
        }
        setContador(contador - 1)
    }

    const add = () => {
        if (stock > 0) {
            onAdd(contador)
        }

    }

    return (
        <div>
            {stock > 0
                ? <div><div className="d-flex justify-content-evenly">
                    <button type="button" className={contador > 1 ?"btn btn-dark" : "btn btn-dark btn-outline-danger"}  onClick={() => res()}>-</button>
                    <h4>{contador}</h4>
                    <button type="button" className={contador === stock ? "btn btn-dark btn-outline-danger" : "btn btn-dark"} onClick={() => sum()}>+</button>
                </div>
                    <br />
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => add()}>Agregar al carrito</button>
                    </div>
                </div>
                : <div> <br/> <h3 style={{"color": "red"}}>NO HAY STOCK</h3> </div>
            }
        </div>
    )
}

export default ItemCount 
