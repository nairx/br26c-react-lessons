import React, { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  const { setCurrUser } = useContext(AppContext);
  const Navigate = useNavigate();
  setCurrUser({});
  Navigate("/login");
  return <div>Logout</div>;
}
