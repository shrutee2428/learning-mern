import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>increase count</button>

      <button onClick={() => setCount(count - 1)}>decrease count</button>
      <button onClick={() => setCount(0)}>restart</button>
    </div>
  );
};
export default Counter;
