import React, { useContext, useState } from "react";
import { AppContext } from "../App";
export default function Cart() {
  const { counter,setCounter } = useContext(AppContext);
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      Cart
      <p><button onClick={()=>setCounter(counter+1)}>{counter}</button></p>
    </div>
  );
}
