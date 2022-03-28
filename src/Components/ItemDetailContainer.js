import React, { useEffect, useState } from "react";
import {PROMISE} from "./ItemListContainer";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(false)
        PROMISE
            .then((items) =>{
                setItem(items.find((prod) => prod.id === itemId) )
            })
            .finally(()=>{
                setLoading(false)
            })

    }
    )

    return (
        <div>
            {
                loading
                ?<h1>Cargando...</h1>
                :<ItemDetail {...item} />
            }
        </div>
    )

}