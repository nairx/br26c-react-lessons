import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(AppContext);
  const product = products.find((elem) => elem.id == id);
  return (
    <div>
      <h2>Product Details of {id}</h2>
      <div style={{display:'flex'}}>
        <img src={`/${product.imgUrl}`} width="300px" alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <h2>{product.price}</h2>
        </div>
      </div>
    </div>
  );
}
