import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {setCount(count+1)}} >inc</button>
      <button onClick={() => {setCount(count-1)}} >dec</button>
    </div>
  )
}

export default Counter
