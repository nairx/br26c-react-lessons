import React from "react";
import { AppContext } from "./AppContextProvider";
import { useContext } from "react";
export default function Users() {
  const { users, setUsers } = useContext(AppContext);
  return (
    <div>
      <h3>User Admin</h3>
      <ol>
      {users &&
        users.map((user) => (
          <li>
            {user.name}-{user.email}
          </li>
        ))}
        </ol>
    </div>
  );
}
