import React, { useState } from 'react'

const UsestPrevState = () => {
    const initVal = 0;
    const [count , setCount] = useState(0);
  return (
    <div>
        <h3>Clicked {count} times</h3>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount=>prevCount + 1)}>IncrementCount</button>
        <button onClick={() => setCount(prevCount=>prevCount - 1)}>Decrement</button></div>
  )
}

export default UsestPrevState