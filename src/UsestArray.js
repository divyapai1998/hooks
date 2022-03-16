import React, { useState } from 'react'

const UsestArray = () => {
    const [arr, setItem] = useState([])
    const addItem = () => {
        setItem([...arr,
            {id:arr.length, val:Math.floor(Math.random()*10+1)}
        ])
    }
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {
            arr.map(el =>
            <li key = {el.id}>{el.val}
            </li>
            )
            }
        </ul>
    </div>
    
  )
}

export default UsestArray