import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import {doc, getDoc} from "firebase/firestore"


export default function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)
        
        const itemRef = doc(database, "products", itemId)
        getDoc(itemRef)
            .then(doc => {
                setItem( {id: doc.id, ...doc.data()} )
            })
            .finally(setLoading(false))
    },[itemId])

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