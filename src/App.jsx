import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [cart, setCart] = useState([]);
  const [orderValue, setOrderValue] = useState(0);
  const products = [
    {
      id: 1,
      imgUrl: "1.PNG",
      name: "Product 1",
      price: 30,
      desc: "This is the descript of the product",
    },
    {
      id: 2,
      imgUrl: "2.PNG",
      name: "Product 2",
      price: 50,
      desc: "This is the descript of the product",
    },
    {
      id: 3,
      imgUrl: "3.PNG",
      name: "Product 3",
      price: 45,
      desc: "This is the descript of the product",
    },
  ];

  //find if product 1 exists in cart array or not

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (!found) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      }),
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id && item.quantity > 0) {
            item.quantity = item.quantity - 1;
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
    );
  }, [cart]);

  return (
    <div>
      <Header />
      <div className="row">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <img src={product.imgUrl} width="300px" alt="" />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <h4>{product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
      <hr />
      <h1>My Cart</h1>
      {cart &&
        cart.map((item) => (
          <li>
            {item.name}-{item.price}-
            <button onClick={() => decrement(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => increment(item.id)}>+</button>-
            {item.price * item.quantity}-<button>Delete</button>
          </li>
        ))}
      <h2>Order Value:{orderValue}</h2>
      <Footer />
    </div>
  );
}

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
