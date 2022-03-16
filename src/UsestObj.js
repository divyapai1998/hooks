import React, { useState } from 'react'

const UsestObj = () => {
    const [name, setName] = useState({'fn':'','ln':''})
  return (
      <form>
            <div>
                <input type="text" value = {name.fn} onChange={e=>setName({...name ,'fn':e.target.value })}></input>
                <input type="text" value = {name.ln} onChange={e=>setName({...name ,'ln':e.target.value })}></input>
            </div>
            <div>full Name : <h2>{name.fn} {name.ln}</h2></div>
      </form>  
  )
}

export default UsestObj