import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [ user, setUser ] = useState({});
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  return (
    <div>
      Register
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
      </p>
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
      <button onClick={handleSubmit}>Submit</button>
      <p>
        <Link to="/login">Already a member? Login here...</Link>
      </p>
    </div>
  );
}
