import React from 'react'

function Coment(coment) {
    return (
        <div>
            <p>Nombre: {coment.name}</p>
            <p>Comentario: {coment.coment}</p>
        </div>
    )
}

export default Coment