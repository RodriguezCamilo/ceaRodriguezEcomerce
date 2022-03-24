import React, { useState} from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial)
    
    const sum = () => {
        if (contador === stock) {
            return
        }
        setContador(contador + 1)
    }

    const res = () => {
        if (contador === initial) {
            return
        }
        setContador(contador - 1)
    }

    const add = () => {
        if (stock > 0){
            onAdd()
        }
        
    }

    return (
        <div>
            <h3>{contador}</h3>
            <div className="d-flex justify-content-evenly">
                <button type="button" className="btn btn-dark" onClick={() => res()}>-</button>
                <button type="button" className="btn btn-dark" onClick={() => sum()}>+</button>
            </div>
            <br/>
            <div>
                <button type="button" className="btn btn-dark" onClick={() => add()}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount 
