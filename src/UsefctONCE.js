import React, { useEffect, useState } from 'react'

const UsefctONCE = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousepos = e =>{
        setX(e.clientX);
        setY(e.clientY);
    }

   useEffect(()=>{
     console.log("Run only in initial render");

    return()=>{ // this code block has been written with reference to unmounting component (UseffctUNMOUNT.js).  what this does is it basically handles cleanup code. this return function basically does removing of event / timer or anything. This is how componentWillUnmount is achieved in useffect.
      console.log("Removed component")
      window.removeEventListener('mousemove',logMousepos)
    }
     
   },[]) // second parameter runs only in initial render. This acts as componentDidMount

  return (
      
    <div>
        {window.addEventListener('mousemove',logMousepos)} 
        <div>Use Effect Hook - X Cord {x} - Y Cord {y}</div>
      </div>
  )
}

export default UsefctONCE