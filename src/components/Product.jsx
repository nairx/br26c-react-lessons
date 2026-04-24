import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
export default function Product() {
  const { cart, setCart } = useContext(AppContext);
  const products = [
    {
      id: 1,
      imgUrl: "1.PNG",
      name: "Product 1",
      price: 30,
      desc: "This is the descript of the product",
    },
    {
      id: 2,
      imgUrl: "2.PNG",
      name: "Product 2",
      price: 50,
      desc: "This is the descript of the product",
    },
    {
      id: 3,
      imgUrl: "3.PNG",
      name: "Product 3",
      price: 45,
      desc: "This is the descript of the product",
    },
  ];

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (!found) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div style={{display:'flex'}}>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <img src={product.imgUrl} width="300px" alt="" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
    </div>
  );
}
