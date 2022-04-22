import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import {doc, getDoc} from "firebase/firestore"
import Coments from "./ComentListContainer";


export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    

    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)
        const itemRef = doc(database, "products", itemId)
        getDoc(itemRef)
            .then(doc => {
                setItem( {id: doc.id, ...doc.data()} )
            })
            .finally(() => { setLoading(false) })
    },[itemId])

    return (
        <div>
            {
                loading
                ?<div><br /><h1>Cargando...</h1>
                <hr/>
                    <div className="spinner-border" role="status">
                    </div>
                </div>
                : <><ItemDetail {...item} />
                    <Coments/>
                    </>
            }
        </div>
    )

}