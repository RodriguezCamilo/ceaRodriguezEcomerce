import React, { useEffect, useState } from "react"
import { ItemList } from "./ItemList.js"

const ITEMS = [{id: "Silla", title: "Silla Corsair T3", price: "$76.000", pictureUrl: "../assets/silla.webp"},
{id: "Auris", title: "Auriculares Logitech", price: "$17.000", pictureUrl: "../assets/auriculares.webp"}]

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
