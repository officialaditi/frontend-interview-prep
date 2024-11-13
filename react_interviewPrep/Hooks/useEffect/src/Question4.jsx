import { useEffect, useState } from "react";

export const Question4 = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("event triggers", count);
    //cleanup function code
    return console.log("cleanup function invoked");
  }, [count]);

  return (
    <>
      <strong>
        we can return the clean up function inside the useEffect, which runs
        before the effect re-runs or when the component unmounts
      </strong>
      <strong>it s useful for cleaning up subscription or event listner</strong>
      <h3>checking cleanup function</h3>
      <span>{count}</span> 
     <button onClick={() => setCount(count + 1)}>Incre</button>
      <p>{count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>count1[incr]</button>
    </>
  );
};
