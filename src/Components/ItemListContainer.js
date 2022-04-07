import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList.js"
import { ITEMS } from "./Stock.js"

/*export const PROMISE = new Promise(resolve => {
    setTimeout(() => {
        return resolve(ITEMS)
    }, 2000)
})
*/

export const URL = "https://apimocha.com/elmasterkam/ecomerce"

export function ItemListContainer() {
    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()



    useEffect(() => {

        setLoading(true)

        const init= async () => {
            const response = await fetch(URL)
            const responseJson = await response.json()
                if (categoryId) {
                        setItemList( responseJson.filter( (prod) => prod.category === categoryId))
                    }
                    else{
                        setItemList(responseJson)
                    }
                    setLoading(false)
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
