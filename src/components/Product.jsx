import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContextProvider";
export default function Product() {
  const { cart, setCart, products, setProducts } = useContext(AppContext);
  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (!found) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  // throw new Error("Home Page crashed");
  return (
    <div style={{ display: "flex" }}>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <img src={product.imgUrl} width="300px" alt="" />
            <h3>
              <Link to={`details/${product.id}`}>{product.name}</Link>
            </h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
    </div>
  );
}
