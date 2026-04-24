import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const [orderValue, setOrderValue] = useState(0);
  const { cart, setCart, currUser } = useContext(AppContext);
  const Navigate = useNavigate();
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
      <p>
        {currUser?.name ? (
          <button>Place Order</button>
        ) : (
          <button onClick={() => Navigate("/login")}>Login to Order</button>
        )}
      </p>
    </div>
  );
}
