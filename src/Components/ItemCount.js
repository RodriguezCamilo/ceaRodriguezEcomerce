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
        onAdd()
    }

    return (
        <div>
            <h3>{contador}</h3>
            <div>
                <button onClick={() => res()}>-</button>
                <button onClick={() => sum()}>+</button>
            </div>
            <div>
                <button onClick={() => add()}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount 
