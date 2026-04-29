import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./userSlice";
export default function User() {
  const user = useSelector((state) => state.user);
  const Dispatch = useDispatch();
  return (
    <div>
      {user.name}
      <hr />
      {user.isLoggedIn ? (
        <button onClick={() => Dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => Dispatch(login("John"))}>Login</button>
      )}
    </div>
  );
}
