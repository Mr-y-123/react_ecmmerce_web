import React, { useEffect, useState } from 'react'

const Home = () => {
  const [count,setCount]=useState(0)

    useEffect(()=>{
      console.log("mounting");

      return (()=>{
        setTimeout(()=>{
          setCount(0)
        },1000)
      })
    },[count])  
  const handleClick=()=>{
    setCount((pre)=>pre+1)
  }
  return (
    <div>Home
      <button type='button' onClick={handleClick}>click useEffect</button>
      {count}
    </div>

  )
}

export default Home