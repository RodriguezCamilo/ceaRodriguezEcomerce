import React, { useEffect, useState } from "react";
import {URL} from "./ItemListContainer";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(false)
        const init= async () => {
            const response = await fetch(URL)
            const responseJson = await response.json()
            setItem(responseJson.find((prod) => prod.id === itemId))
            setLoading(false)
        };
        init()
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