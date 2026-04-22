import React from "react";
export default function Main({ page }) {
  //   let result = page % 2 === 0 ? "Even" : "Odd";

  if (page === 1) {
    return <div>Home Page</div>;
  } else if (page === 2) {
    return <div>Services Page</div>;
  } else {
    return <div>About Page</div>;
  }
}
