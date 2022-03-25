import React, { useReducer } from 'react'

const initState = {first:0,second:5}
const reducer = (state, action) => {
    console.log("state",state,"action",action)
    switch (action.type) {
        case 'increment':
            return {...state,first:state.first + action.value}
        case 'decrement':
            return {...state,first:state.first - action.value}
        case 'increment2':
            return {...state,second:state.second + action.value}
        case 'decrement2':
            return {...state,second:state.second - action.value}
        case 'reset':
            return initState
        default: return state
    }
}
const UseRedceCounter = () => {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <div>COUNT - {count.first} </div>
            <div>COUNT - {count.second} </div>
            <button onClick={()=>dispatch({type:'increment',value:1,value1:'abc'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment counter 2</button>
            <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement counter 2</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default UseRedceCounter