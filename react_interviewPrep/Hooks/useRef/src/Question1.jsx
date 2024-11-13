import { useRef, useState } from "react";

export const Question1 = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0)

  return (
    <>
    <ul>
        <li>
            this hook is used to persist the values between render.
        </li>
        <li>it is used to access the DOM element directly</li>
    </ul>
      <h1>{countRef.current}</h1>
      <button onClick={() => (countRef.current += 1)}>Increment Ref</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>count Increment</button>
    </>
  );
};
