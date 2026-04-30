import React from 'react'
import { useState } from 'react'
export default function App2() {
  const [message,setMessage] = useState()
  return (
    <div>
      <p>
        <button onClick={()=>setMessage("Hello World")}>Click</button>
      </p>
      {message}
    </div>
  )
}
