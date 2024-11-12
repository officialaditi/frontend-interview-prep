import { useState } from "react";

export const UseStateComp = () => {
  const [count, setCount] = useState(0);

  const handleIncCount = () => {
    setCount(count + 1);
  };

  const handleDecCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Hey, this is count:- {count}</h1>
      <button onClick={handleIncCount}>Increment</button>
      <button onClick={handleDecCount}>Decrement</button>
    </>
  );
};
