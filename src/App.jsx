import React from 'react'
import User from './components/User'
export default function App() {
  return (
    <div>
     <User/>
    </div>
  )
}





// import React from "react";
// import "./App.css"
//npm install -D tailwindcss@3 postcss autoprefixer

// npx tailwindcss init –p

// Add following in index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// in tailwind.config.js update following
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

// export default function App() {
//   return (
//     <div>
//       <h1 className="bg-blue-900 text-3xl font-bold text-orange-300">
//         Hello World
//       </h1>

//       {/* 
//       <div className="bg-pink-500 m-1 p-1">Box</div>
//       <div className="bg-orange-500 mx-3 my-4 px-3">Box</div>
//       <div className="bg-pink-500 mt-3 pt-1">Box</div>
//        <div className="bg-pink-500 ms-3 ps-1">Box</div> */}

//       {/* <div className="flex justify-center">
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//       </div> */}

//       {/* <div className="flex justify-center">
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//       </div>  */}

//       {/* <div className="grid grid-cols-3 gap-3">
//         <div className="bg-pink-500 w-20 m-5 rounded-sm">Box</div>
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//         <div className="bg-pink-500 w-20 m-5">Box</div>
//       </div>  */}

//       {/* <div className=" m-5 p-5 rounded-md border border-gray-500 ">
//         Hello World
//       </div> */}

//       {/* <div className="lg:text-5xl md:text-3xl sm:text-xl">Lorem ipsum dolor sit amet.</div> */}

//       {/* <button className="bg-gray-300 m-3 p-2 text-xl font-bold hover:bg-gray-400 rounded-lg">Submit</button> */}

//       {/* <div className="m-5 text-3xl bg-blue-300 w-20 hover:bg-blue-400">
//         Product 1
//       </div> */}


     
//      <div className="flex">
//       <div className="box">Box 1</div>
//       <div className="box">Box 2</div>
//       <div className="box">Box 3</div>
//      </div>

//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>Hello World</div>
//   )
// }

// import React from 'react'
// import {FaHome,FaSave,FaPython} from "react-icons/fa"
// export default function App() {
//   return (
//     <div>
//       <li><FaHome size={10}/>Home</li>
//       <li><FaSave/>Services</li>
//       <li><FaPython/> About</li>
//     </div>
//   )
// }

// import React from "react";
// import { useReducer } from "react";
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return { count: state.count };
//   }
// }
// export default function App() {
//   const [state, Dispatch] = useReducer(reducer, { count: 0 });
//   const increment = () => {
//     Dispatch({ type: "increment" });
//   };
//   const decrement = () => {
//     Dispatch({ type: "decrement" });
//   };
//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       {state.count}
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useDeferredValue } from "react";
// export default function App() {
//   const [employees, setEmployees] = useState([]);
//   const [text, setText] = useState();
//   const deferredText = useDeferredValue(text)
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) =>
//       setEmployees(data.filter((elem) => elem.name.includes(deferredText))),
//     )
//     .catch((err) => console.log(err));
//   return (
//     <div>
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <hr />
//       {employees && employees.map(employee => (
//         <li key={employee.id}>{employee.name}</li>
//       ))}
//     </div>
//   );
// }

// import React, { useState, useTransition } from "react";
// export default function App() {
//   const [employees, setEmployees] = useState([]);
//   const [isPending, startTransition] = useTransition();
//   const handleDisplay = () => {
//     startTransition(async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       setEmployees(data);
//       for (let i = 0; i < 10000000000; i++) {}
//     });
//   };
//   return (
//     <div>
//       <button onClick={handleDisplay}>Employees</button>
//       <button>Products</button>
//       <button>Vendors</button>
//       <hr />
//       {isPending && <h2>Loading...</h2>}
//       {employees &&
//         employees.map((employee) => <li key={employee.id}>{employee.name}</li>)}
//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useState } from "react";
// import EditProd from "./components/EditProd";
// import Prod from "./components/Prod";
// import axios from "axios";
// export default function App() {
//   const router = createBrowserRouter([
//     { index: true, element: <Prod /> },
//     { path: "/:id", element: <EditProd /> },
//   ]);
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// }

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useState } from "react";
// import RootLayout from "./components/RootLayout";
// import Product from "./components/Product";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
// import Order from "./components/Order";
// import Register from "./components/Register";
// import AppContextProvider from "./components/AppContextProvider";
// import AdminLayout from "./components/AdminLayout";
// import Products from "./components/Products";
// import Users from "./components/Users";
// import Orders from "./components/Orders";
// import ErrorPageGlobal from "./components/ErrorPageGlobal";
// import ErrorPage from "./components/ErrorPage";
// import ProductDetails from "./components/ProductDetails";
// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       errorElement: <ErrorPageGlobal />,
//       children: [
//         { index: true, element: <Product />, errorElement: <ErrorPage /> },
//         { path: "details/:id", element: <ProductDetails /> },
//         { path: "cart", element: <Cart /> },
//         { path: "order", element: <Order /> },
//         { path: "login", element: <Login /> },
//         { path: "logout", element: <Logout /> },
//         { path: "register", element: <Register /> },
//         {
//           path: "admin",
//           element: <AdminLayout />,
//           children: [
//             { index: true, element: <Users /> },
//             { path: "products", element: <Products /> },
//             { path: "orders", element: <Orders /> },
//           ],
//         },
//       ],
//     },
//   ]);
//   return (
//     <div>
//       <AppContextProvider>
//         <RouterProvider router={router}></RouterProvider>
//       </AppContextProvider>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// const Question = ({ q }) => {
//   console.log("Question component rendered");
//   const questions = [
//     {
//       id: 1,
//       question: "Question 1",
//       options: ["one", "two", "three", "four"],
//       answer: 0,
//     },
//     {
//       id: 2,
//       question: "Question 2",
//       options: ["one", "two", "three", "four"],
//       answer: 0,
//     },
//     {
//       id: 3,
//       question: "Question 3",
//       options: ["one", "two", "three", "four"],
//       answer: 0,
//     },
//   ];
//   return (
//     <div>
//       <h2>{questions[q].question}</h2>
//     </div>
//   );
// };

// export default function App() {
//   const [timeLeft, setTimeLeft] = useState(5);
//   const [qNum, setQNum] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (timeLeft === 0) {
//         clearInterval(timer);
//         return;
//       }
//       setTimeLeft(timeLeft - 1);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [timeLeft]);
//   return (
//     <div>
//       <p>{timeLeft}s</p>
//       <div>
//         <Question q={qNum} />
//         <p>
//           <button onClick={() => setQNum(qNum + 1)}>Next</button>
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import useFetch from "./components/useFetch";
// export default function App() {
//   const data = useFetch("https://jsonplaceholder.typicode.com/users");
//   return (
//     <div>{data && data.map((item) => <li key={item.id}>{item.name}</li>)}</div>
//   );
// }

// import React, { useState, useCallback } from "react";
// const Child = React.memo(({ onclick }) => {
//   console.log("Child Component rendered");
//   return (
//     <div>
//       <button onClick={onclick}>Click</button>
//     </div>
//   );
// });

// export default function App() {
//   const [count, setCount] = useState(0);
//   const handleClick = useCallback(() => {
//     console.log("Clicked...");
//   }, []);
//   return (
//     <div>
//       <Child onclick={handleClick} />
//       <hr />
//       <button onClick={() => setCount(count + 1)}>Update {count}</button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// const Child = React.memo(({num}) => {
//   console.log("Child Component rendered");
//   return <div>{num + 5}</div>;
// });

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Child num={5} />
//       <hr />
//       <button onClick={() => setCount(count + 1)}>Update {count}</button>
//     </div>
//   );
// }

// import React, { useEffect, useState, useMemo } from "react";
// export default function App() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Ticking...");
//     }, [1000]);
//     setTimeout(() => {
//       clearInterval(timer);
//     }, [5000]);
//   }, []);
//   return <div></div>;
// }

// import React from "react";
// import Temp from "./components/Temp";
// import Temp1 from "./components/Temp1";
// import Temp2 from "./components/Temp2";
// export default function App() {
//   return (
//     <div>
//       <Temp>
//         <Temp1 />
//         <Temp2 />
//       </Temp>
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { useState, useEffect } from "react";
// import { createContext } from "react";
// import Product from "./components/Product";
// import Cart from "./components/Cart";
// import "./App.css";
// export const AppContext = createContext();
// export default function App() {
//   const [cart, setCart] = useState([]);
//   return (
//     <div>
//       <AppContext.Provider value={{ cart, setCart }}>
//         <Header />
//         <Product />
//         <hr />
//         <Cart />
//         <Footer />
//       </AppContext.Provider>
//     </div>
//   );
// }

// import React from "react";
// import { createContext, useState } from "react";
// import Product from "./components/Product";
// import Cart from "./components/Cart";
// export const AppContext = createContext();
// export default function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <AppContext.Provider value={{ counter, setCounter }}>
//       <div
//         style={{ display: "flex", backgroundColor: "gray", padding: "15px" }}
//       >
//         {counter}
//         <Product />
//         <hr />
//         <Cart />
//       </div>
//     </AppContext.Provider>
//   );
// }

// import React from "react";
// import { useState, useMemo } from "react";
// export default function App() {
//   const [num, setNum] = useState(0);
//   const [flag, setFlag] = useState(0);
//   const expensiveCalculation = () => {
//     console.log("expensiveCalculation function called");
//     let i;
//     for (i = 0; i < 1000; i++) {}
//     return i * num;
//   };
//   // const result = expensiveCalculation()
//   const result = useMemo(() => expensiveCalculation(), [num]);
//   return (
//     <div>
//       <button onClick={() => setNum(num + 1)}>Num-{num}</button>
//       <button onClick={() => setFlag(flag + 1)}>Flag-{flag}</button>
//       <hr />
//       {result}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
// export default function App() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setNum1(num1 + 1)}>Update Num1 {num1}</button>
//       <button onClick={() => setNum2(num2 + 1)}>Update Num2 {num2}</button>
//       <hr />
//       <Child1 val={num1} />
//       <Child2 val={num2} />
//     </div>
//   );
// }

// import React, { useState } from "react";
// export default function App() {
//   const [basket1, setBasket1] = useState(["Item1", "Item2", "Item3"]);
//    const [basket2, setBasket2] = useState([]);
//    const [item,setItem] = useState()
//    const rightArrow = () => {

//    }
//    const leftArrow = () => {

//    }
//   return (
//     <div style={{display:'flex',justifyContent:'center'}}>
//       <div>
//         <select multiple>
//           {basket1 &&
//             basket1.map((item) => <option value={item}>{item}</option>)}
//         </select>
//       </div>
//       <div>
//         <p><button>&gt;</button></p>
//         <p><button>&lt;</button></p>

//       </div>
//       <div>
//         <select multiple>
//           {basket2 &&
//             basket2.map((item) => <option value={item}>{item}</option>)}
//         </select>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [notes,setNotes] = useState([])
//   const [text,setText] = useState()
//   const handleSave = () => {
//     setNotes([...notes,text])
//   }
//   return (
//     <div>
//       <h1>My Notes</h1>
//       <p>
//         <textarea rows="5" cols="50" onChange={(e)=>setText(e.target.value)}></textarea>
//       </p>
//       <p>
//         <button onClick={handleSave}>Save</button>
//       </p>
//       <hr />
//       <ol>
//       {notes && notes.map((note,idx)=>(
//         <li key={idx}>{note}-<button>Delete</button></li>
//       ))}
//       </ol>
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";
// import ProductCard from "./components/ProductCard";
// export default function App() {
//   const [cart, setCart] = useState([]);
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       desc: "This is the desc of the produduct",
//       price: 30,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       desc: "This is the desc of the produduct",
//       price: 30,
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       desc: "This is the desc of the produduct",
//       price: 30,
//     },
//   ];
//   const handleAdd = (product) => {
//     setCart([...cart, product]);
//   };

//   const findItem = (id) => {
//     const found = cart.find((item) => item.id === id);
//     if (found) return true;
//     else false;
//   };

//   return (
//     <div>
//       {products && products.map((product) => <ProductCard product={product} />)}
//       <hr />
//       {cart && cart.map((item) => <li key={item.id}>{item.name}</li>)}
//     </div>
//   );
// }

{
  /* <button
              onClick={() => handleAdd(product)}
              disabled={findItem(product.id) ? true : false}
            >
              Add to Cart
            </button> */
}

// {!findItem(product.id) ? (
//   <button onClick={() => handleAdd(product)}>Add to Cart</button>
// ) : (
//   <button disabled>Add to Cart</button>
// )}

// import React, { useEffect, useState } from "react";
// import { useRef } from "react";
// export default function App() {
//   const [number, setNumber] = useState();
//   const prevNum = useRef();
//   const msgRef = useRef();
//   useEffect(() => {
//     if (prevNum.current > number) {
//       msgRef.current.style.color = "red";
//     } else {
//       msgRef.current.style.color = "green";
//     }
//     prevNum.current = number;
//   }, [number]);
//   return (
//     <div>
//       <p ref={msgRef}>{number}</p>
//       <p>
//         <input type="number" onChange={(e) => setNumber(e.target.value)} />
//       </p>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useRef } from "react";
// export default function App() {
//   const [color, setColor] = useState();
//   const msgRef = useRef();
//   const handleSubmit = () => {
//     msgRef.current.style.color = color;
//   };
//   return (
//     <div>
//       <p>
//         <input type="text" onChange={(e) => setColor(e.target.value)} />
//         <button onClick={handleSubmit}>Submit</button>
//       </p>
//       <p ref={msgRef}>Hello World</p>
//     </div>
//   );
// }

// import React, { useRef,useState } from "react";
// export default function App() {
//   const nameRef = useRef();
//   const [msg, setMsg] = useState();
//   const handleSubmit = () => {
//     setMsg(nameRef.current.value);
//   };
//   return (
//     <div>
//       <p>
//         <input type="text" ref={nameRef} />
//       </p>
//       <button onClick={handleSubmit}>Submit</button>
//       <hr />
//       {msg}
//     </div>
//   );
// }

// import React, { useState } from "react";
// export default function App() {
//   const [name, setName] = useState();
//   const [msg, setMsg] = useState();
//   const handleSubmit = () => {
//     setMsg(name);
//   };
//   return (
//     <div>
//       <p>
//         <input type="text" onChange={(e) => setName(e.target.value)} />
//       </p>
//       <button onClick={handleSubmit}>Submit</button>
//       <hr />
//       {msg}
//     </div>
//   );
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// import { useState } from "react";
// import Main from "./components/Main";
// export default function App() {
//   const [page, setPage] = useState(1);
//   return (
//     <div>
//       <div>
//         <h1>My App</h1>
//         <ul>
//           <li onClick={()=>setPage(1)}>Home</li>
//           <li onClick={()=>setPage(2)}>Services</li>
//           <li onClick={()=>setPage(3)}>About</li>
//         </ul>
//       </div>
//       <div>
//         <Main page={page} />
//       </div>
//       <div>&copy; 2026. All rights reserved.</div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";
// export default function App() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const [users, setUsers] = useState([]);
//   const [friends, setFriends] = useState([]);
//   const fetchUsers = async () => {
//     const res = await axios(url);
//     setUsers(res.data);
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   const addFriend = (user) => {
//     const found = friends.find((friend) => friend.id === user.id);
//     if (!found) {
//       setFriends([...friends, user]);
//     }
//   };
//   const removeFriend = (id) => {
//     setFriends(friends.filter((friend) => friend.id !== id));
//   };
//   return (
//     <div>
//       {users &&
//         users.map((user) => (
//           <li key={user.id}>
//             {user.name}-<button onClick={() => addFriend(user)}>Add</button>
//           </li>
//         ))}
//       <hr />
//       <h3>My Friends</h3>
//       {friends &&
//         friends.map((friend) => (
//           <li key={friend.id}>
//             {friend.name}-
//             <button onClick={() => removeFriend(friend.id)}>Remove</button>
//           </li>
//         ))}
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { useState } from "react";
// export default function App() {
//   const [user, setUser] = useState({});
//   const handleSubmit = () => {
//     console.log(user)
//   }
//   return (
//     <div>
//       <Header />
//       <h3>Registration Form</h3>
//       <p><input type="text" placeholder="Name" onChange={(e) => setUser({...user,name:e.target.value})} /></p>
//        <p><input type="text" placeholder="Email" onChange={(e) => setUser({...user,email:e.target.value})} /></p>
//         <p><input type="password" placeholder="Password" onChange={(e) => setUser({...user,password:e.target.value})} /></p>
//       <button onClick={handleSubmit}>Submit</button>
//       <Footer />
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { useState } from "react";
// export default function App() {
//   const [score, setScore] = useState(0);
//   const handleSubmit = () => {
//     console.log(score);
//   };
//   return (
//     <div>
//       <Header />
//       <input type="text" onChange={(e) => setScore(e.target.value)} />
//       <button onClick={handleSubmit}>Submit</button>
//       <Footer />
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { useState } from "react";
// export default function App() {
//   const [score, setScore] = useState(0);
//   return (
//     <div>
//       <Header />
//       <h1>{score}</h1>
//       <input type="number" onChange={(e) => setScore(e.target.value)} />
//       <Footer />
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { useState } from "react";
// export default function App() {
//   const [score, setScore] = useState(0);
//   const handleUpdate = (num) => {
//     setScore(num);
//   };
//   return (
//     <div>
//       <Header />
//       <h1>{score}</h1>
//       <input type="number" onChange={(e) => handleUpdate(e.target.value)} />
//       <Footer />
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { useState } from "react";
// export default function App() {
//   console.log("App rendered")
//   const [score, setScore] = useState(10);
//   const handleUpdate = () => {
//     setScore(score + 1);
//   };
//   return (
//     <div>
//       <Header />
//       <h1>{score}</h1>
//       <button onClick={handleUpdate}>Update</button>
//       <Footer />
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// export default function App() {
//   const handleChange=(name)=>{
//     alert(`Hello ${name}`)
//   }
//   return (
//     <div>
//       <Header />
//       <input type="text" onChange={(e)=>handleChange(e.target.value)} />
//       <input type="text" onChange={(e)=>handleChange(e.target.value)} />
//       <Footer />
//     </div>
//   );
// }

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// export default function App() {
//   const handleClick = (name) => {
//     console.log(`Hello ${name}`);
//   };
//   return (
//     <div>
//       <Header />
//       <button onClick={() => handleClick("John")}>Click</button>
//       <Footer />
//     </div>
//   );
// }
