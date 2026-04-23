import React from "react";
import { useState } from "react";
export default function Product() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{backgroundColor:'orange',padding:'10px'}}>
      Product
      <p>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </p>
    </div>
  );
}
