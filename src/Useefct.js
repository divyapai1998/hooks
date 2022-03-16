import React, { useEffect, useState } from 'react'

const Useefct = () => {
    const [count, setCount] = useState(0)
    useEffect (()=>{
        document.title = 'Hey number ' + count
    })
  return (
    <div><button onClick={()=>setCount(prevst=>prevst + 1)}>Clicked {count} times</button></div>
  ) 
}

export default Useefct