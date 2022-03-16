import React, { useState } from 'react'
import UsefctONCE from './UsefctONCE';

const UseffctUNMOUNT = () => {
    const [display,setDisplay] =useState(true);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Click Here</button>
        {display && <UsefctONCE />}
        </div>
  )
}

export default UseffctUNMOUNT