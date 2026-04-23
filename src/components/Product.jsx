import React from "react";
import { useState } from "react";
export default function Product() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Product
      <p>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </p>
    </div>
  );
}
