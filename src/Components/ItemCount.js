import React from "react"

const ItemCount = ({ stock = 10, onAdd, contador, setContador }) => {
    
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
        if (stock > 0){
            onAdd()
        }
        
    }

    return (
        <div>
            <div className="d-flex justify-content-evenly">
                <button type="button" className={`btn btn-dark ${contador === 1 && "btn-outline-danger"}`} onClick={() => res()}>-</button>
                <h4>{contador}</h4>
                <button type="button" className={`btn btn-dark ${contador === stock && "btn-outline-danger" }`} onClick={() => sum()}>+</button>
            </div>
            <br/>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => add()}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount 
