import React from "react";

function Child1({ val }) {
  console.log("Child 1 rendered");
  const result = val * 2;
  return <div>Child1-{result}</div>;
}

export default React.memo(Child1);
