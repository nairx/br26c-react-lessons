import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContextProvider";
import { useContext } from "react";
import App from "../App";
export default function Order() {
  const { orders, currUser } = useContext(AppContext);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    setMyOrders(orders.filter((order) => order.email === currUser.email));
  }, []);
  return (
    <div>
      <h3>My Orders</h3>
      <ol>
      {myOrders &&
        myOrders.map((order, index) => (
          <li key={order.index}>
            {order.name}-{order.email}-{order.items.length}-{order.orderValue}-{order.status}
             <ol>
                {order.items.map(item=>(
                    <li key={item.id}>{item.name}-{item.quantity}</li>
                ))}
             </ol>
          </li>
        ))}
        </ol>
    </div>
  );
}
