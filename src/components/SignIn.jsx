import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
export default function SignIn() {
  const [user, setUser] = useState({});
  const handleSuccess = (credentialResponse) => {
    const details = jwtDecode(credentialResponse.credential);
    setUser(details);
  };
  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Error")}
      />
      <p><img src={user.picture}/></p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <hr />
      <button onClick={()=>setUser({})}>Logout</button>
    </div>
  );
}
