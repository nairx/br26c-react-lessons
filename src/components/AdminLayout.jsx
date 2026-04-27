import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function AdminLayout() {
  return (
    <div>
      <Link to="/admin">Users</Link>&nbsp;|&nbsp;
      <Link to="products">Products</Link>&nbsp;|&nbsp;
      <Link to="orders">Orders</Link>
      <Outlet />
    </div>
  );
}
