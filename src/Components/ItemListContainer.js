import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList.js"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import {database} from "../firebase/config"



export function ItemListContainer() {

    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const porductsRef = collection(database, "products")
        const q = categoryId ? query(porductsRef, where("category", "==", categoryId)) : porductsRef

        getDocs(q)
        .then(resp=> {

            const items = resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
            setItemList(items)

        
        })
        .finally(()=> {setLoading(false)})
    }, [categoryId])

    return (
        <div>
            {
                loading
                    ? <div><br/><h1>Cargando...</h1></div>
                    : <div> <br/>
                        <h1>Gaming Shop</h1>
                        <hr />
                        <ItemList items={itemList} /></div>
            }
        </div>)
}
