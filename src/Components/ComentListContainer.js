import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { database } from "../firebase/config";
import {collection, getDocs} from "firebase/firestore"
import ComentList from './ComentList';


function Coments() {
    const [com, setCom] = useState(null)
    const {itemId} = useParams()

    useEffect(() =>{

        const comRef = collection(database, "products", itemId, "coments")

        getDocs(comRef)
            .then(resp => {
                const coments = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setCom(coments)
            })
            .finally(() => { console.log(com) })
    },[itemId])



    return (
        <div>
            <h2>Comentarios</h2>
            <hr/>
            <ComentList coments={com}/>
        </div>
    )
}

export default Coments