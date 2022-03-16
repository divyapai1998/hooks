import React, { useEffect, useState } from 'react'
import Useefct from './Useefct';

const UsefectCON = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log("Updated name")
        document.title= `Hey ${count}`
    },[count]) // second parameter runs only if count variable updates. This acts as componentWillUpdate
  return (
    <div>
        <input onChange={e=>setName(prestate =>prestate+e.target.value)} name="name" type="text"></input>
        <button onClick={()=>setCount(prestate=>prestate+1)}> Clicked {count} times</button>
    </div>
  )
}

export default UsefectCON