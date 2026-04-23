import React, { useContext } from "react";
import { useState } from "react";
import {AppContext} from "../App"
export default function Product() {
  const {counter,setCounter} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'orange',padding:'10px'}}>
      Product
      <p>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </p>
    </div>
  );
}
