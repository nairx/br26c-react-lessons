import React from "react";
import { AppContext } from "./AppContextProvider";
import { useContext } from "react";
export default function Products() {
  const { products, setProducts } = useContext(AppContext);
  return <div>
    Products Admin
<ol>
  {products && products.map(product => (
    <li key={product.id}>{product.name}-{product.price}-{product.desc}</li>
  ))}
</ol>

  </div>;
}
