import React from "react";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
export default function Main({ page }) {
  //   let result = page % 2 === 0 ? "Even" : "Odd";

  if (page === 1) {
    return <Home />;
  } else if (page === 2) {
    return <Services />;
  } else {
    return <About />;
  }
}
