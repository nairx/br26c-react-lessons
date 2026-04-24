import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>My App</h1>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
        <li><Link to="login">Login</Link></li>
      </ul>
    </div>
  );
}
