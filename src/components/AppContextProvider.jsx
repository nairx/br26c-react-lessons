import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);
  const [currUser,setCurrUser] = useState({})
  const value = {
    cart,
    setCart,
    users,
    setUsers,
    currUser,
    setCurrUser
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
