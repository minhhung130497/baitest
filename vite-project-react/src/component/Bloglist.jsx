import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'

const Bloglist = () => {
    const [newItem, setNewItem] = useState("")
    const [items,setItems] = useState([])

    function addItem(){

        if(!newItem){
            alert('enter Item')
            return 
        }
        const item = {
            id: Math.floor(Math.random()*1000),
            value: newItem
        }
        setItems(i => [...i, item])
        setNewItem("")
        console.log(items)
    }

    function deleteItem(id){
        const newArr = items.filter(item => item.id !== id)
        setItems(newArr)
    }
    return (
        <div>   
            <h1>todo</h1>

            <input 
            type="text"
            placeholder='add item'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>add</button>

            <ul>
               
                   {items.map(item =>{
                       return(
                       <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></li>
                       )
                   })}
                
            </ul>
        </div>
        
    )
}

export default Bloglist
