import React from "react"
import {Item} from "./Item.js"

export function ItemList({items}) {
    return (
        <div>
            {items.map((item)=> <Item item={item} key={item.id}/> )}
        </div>
    )
}