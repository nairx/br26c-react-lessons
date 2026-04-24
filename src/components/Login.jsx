import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <div>
        Login
        <p>
          <input type="text" placeholder="Email" />
        </p>
        <p>
          <input type="password" placeholder="Password" />
        </p>
        <button>Login</button>
        <p>
          <Link to="/register">New User Register here...</Link>
        </p>
      </div>
    </div>
  );
}
