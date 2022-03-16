import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseffctfetchData = () => {
    const [id,setId] = useState(1);
    const [posts,setPosts] = useState([]);

    // useEffect(()=>{
    //      fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response=>response.json())
    //     .then(result=>setPosts(result))    
    // },[]) 
    //this above method is how you fetch data from an API. This acts as ComponentDidMount
//     useEffect(()=>{
//         axios("https://jsonplaceholder.typicode.com/posts")
//        .then(result=>setPosts(result.data))    
//    },[]) 
   // this is how fetch data from API with the help of axios
   useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then(result=>setPosts(result.data))    
},[id]) 
// this is how we conditionally run useffect
  return (
      <div>
           <input  type="text" onChange={(e)=>setId(e.target.value)}  placeholder='enter id' />
    <div>{posts.title}</div>
      </div>
     
  )
}

export default UseffctfetchData