import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList.js"
import { ITEMS } from "./Stock.js"

export const PROMISE = new Promise(resolve => {
    setTimeout(() => {
        return resolve(ITEMS)
    }, 2000)
})


export function ItemListContainer() {

    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {

        setLoading(true)

        function init() {
            PROMISE
                .then((items => {

                    if (categoryId) {
                        setItemList( items.filter( (prod) => prod.category === categoryId))
                    }
                    else{
                        setItemList(items)
                    }
                } ))
                .finally(() => {
                    setLoading(false)
                })
        }
        init()
    }, [categoryId])

    return (
        <div>
            {
                loading
                    ? <h1>Cargando...</h1>
                    : <div> <br/>
                        <h1>Gaming Shop</h1>
                        <hr />
                        <ItemList items={itemList} /></div>
            }
        </div>)
}
