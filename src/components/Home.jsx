import React from "react";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Home Component Mounted");
    return () => {
      console.log("Home Component Unmounted");
    };
  }, []);
  const updateCount = () => {
    console.log("Component Updated or Rerendered");
    setCount(count + 1);
  };
  return (
    <div>
      Home
      <p>{count}</p>
      <p>
        <button onClick={() => updateCount()}>Update</button>
      </p>
    </div>
  );
}
