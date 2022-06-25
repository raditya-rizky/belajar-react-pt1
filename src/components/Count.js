import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>

      <div>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </>
  );
}

export default Count;
