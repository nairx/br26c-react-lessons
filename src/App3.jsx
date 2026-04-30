import React, { useState } from "react";
export default function App3() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const handleSubmit = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      setMessage("Welcome");
    } else {
      setMessage("Access Denied");
    }
  };
  return (
    <div>
      <p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}
