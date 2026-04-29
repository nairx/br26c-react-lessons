import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { login,logout } from "./userSlice";
export default function SignIn() {
  const [user, setUser] = useState({});
  const usr = useSelector((state) => state.user);
  const Dispatch = useDispatch();
  const handleSuccess = (credentialResponse) => {
    const details = jwtDecode(credentialResponse.credential);
    Dispatch(login(details.name));
    setUser(details);
  };
  return (
    <div className="w-1/2 m-5 bg-gray-300 p-3">
      {usr?.name ? (
        <>
          <h1>{usr.name}</h1>
          <button onClick={() => Dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <p>
            <input type="text" placeholder="Email" />
          </p>
          <p>
            <input type="password" placeholder="Password" />
          </p>
          <button>Login</button>
          <hr />

          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Error")}
          />
        </>
      )}

      {/* <p><img src={user.picture}/></p>
      <p>{user.name}</p>
      <p>{user.email}</p> */}
      {/* <hr /> */}
    </div>
  );
}
