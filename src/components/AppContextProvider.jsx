import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);
  const [currUser, setCurrUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([
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
    ,
  ]);
  const value = {
    cart,
    setCart,
    users,
    setUsers,
    currUser,
    setCurrUser,
    orders,
    setOrders,
    products,
    setProducts,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
