import React from 'react'
import Coment from './Coment'

function ComentList({coments}) {
    return (
        <div>
            {coments.map((coment)=> <Coment coment={coment} key={coment.id}/> )}
        </div>
    )
}

export default ComentList