import React, { useEffect, useState } from "react"
import { ItemList } from "./ItemList.js"

const ITEMS = [{id: "Silla", title: "Silla Corsair T3", price: "$76.000", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_798057-MLA43822611762_102020-O.webp"},
{id: "Auris", title: "Auriculares Logitech", price: "$17.000", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_798552-MLA44771577101_022021-O.webp"}]

const PROMISE = new Promise (resolve => {
    setTimeout(() =>{
        return resolve(ITEMS)
    }, 2000)
})


export function ItemListContainer() {
    const [itemList, setItemList] = useState([])

    useEffect(()=>{
        function init() {
            PROMISE.then(items => setItemList(items))
        }
        init()
    }, [])

    return (<div>
        <h3>Producto</h3>
            <ItemList items={itemList}/>
        </div>)
}
