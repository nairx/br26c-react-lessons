import React from "react";
export default function ProductCard({product}) {
  return (
    <div key={product.id}>
      <h1>{product.name}</h1>
      <p>{product.desc}</p>
      <h3>{product.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}
