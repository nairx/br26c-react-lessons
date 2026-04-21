import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
export default function App() {
  const [user, setUser] = useState({});
  const handleSubmit = () => {
    console.log(user)
  }
  return (
    <div>
      <Header />
      <h3>Registration Form</h3>
      <p><input type="text" placeholder="Name" onChange={(e) => setUser({...user,name:e.target.value})} /></p>
       <p><input type="text" placeholder="Email" onChange={(e) => setUser({...user,email:e.target.value})} /></p>
        <p><input type="password" placeholder="Password" onChange={(e) => setUser({...user,password:e.target.value})} /></p>
      <button onClick={handleSubmit}>Submit</button>
      <Footer />
    </div>
  );
}

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
