import React from 'react'
import { AppContext } from './AppContextProvider'
import { useContext } from 'react'
export default function Orders() {
  const {orders,setOrders} = useContext(AppContext)
  return (
    <div>
      Orders Admin

<ol>
  {orders && orders.map(order => (
    <li>{order.email}-{order.items.length}-{order.orderValue}</li>
  ))}
</ol>

    </div>
  )
}
