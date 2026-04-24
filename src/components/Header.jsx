import "./Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContextProvider";
import { useContext } from "react";
import App from "../App";
export default function Header() {
  const { currUser,cart } = useContext(AppContext);
  console.log(currUser)
  return (
    <div className="header">
      <h1>My App</h1>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cart">MyCart({cart.length})</Link>
        </li>
        <li>
          <Link to="order">MyOrders</Link>
        </li>
        {currUser?.name ? (
          <li>
            <Link to="logout">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
