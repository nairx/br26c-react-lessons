import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useState, useEffect } from "react";
export default function Cart() {
  const [orderValue, setOrderValue] = useState(0);
  const { cart, setCart } = useContext(AppContext);
  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      }),
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id && item.quantity > 0) {
            item.quantity = item.quantity - 1;
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
    );
  }, [cart]);
  return (
    <div>
      <h1>My Cart</h1>
      {cart &&
        cart.map((item) => (
          <li>
            {item.name}-{item.price}-
            <button onClick={() => decrement(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => increment(item.id)}>+</button>-
            {item.price * item.quantity}-
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      <h2>Order Value:{orderValue}</h2>
    </div>
  );
}
