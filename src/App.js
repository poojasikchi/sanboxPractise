import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      console.log(`count is ${count}`);
    } else {
      console.log(`chtas`);
    }
  }, [count]);
  useEffect(() => {
    console.log("second effect " + count);
  }, [count]);
  console.log("hello outside" + count);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
