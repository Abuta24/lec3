import React, { useState } from 'react'

const Button = () => {

  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>
    </div>
  )
}

export default Button
