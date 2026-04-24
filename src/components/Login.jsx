import React, { useContext, useState } from "react";
import App from "../App";
import { AppContext } from "./AppContextProvider";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const { users, setUsers } = useContext(AppContext);
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState();
  const handleLogin = () => {
    const found = users.find(
      (element) =>
        element.email === user.email && element.password === user.password,
    );
    if (!found) {
      setMsg("Invalid Credentials");
    } else {
      Navigate("/");
    }
  };
  return (
    <div>
      <div>
        Login
        <p>{msg}</p>
        <p>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
        </p>
        <p>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
        </p>
        <button onClick={handleLogin}>Login</button>
        <p>
          <Link to="/register">New User Register here...</Link>
        </p>
      </div>
    </div>
  );
}
