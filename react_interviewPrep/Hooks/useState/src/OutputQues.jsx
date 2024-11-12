import { useState } from "react";

export const OutputQues = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    // like this giving callback with prev value init and then using the value to update with 3
    setCount((prev) => prev + 3);

    // this will not update the value by 3
    // setCount(count + 1); // 0+1
    // setCount(count + 1); // 0+1
    // setCount(count + 1); // 0+1
  };

  return (
    <>
      <strong>
        we have count, and we have set count 3 time in function does it
        Increment the function directly to 3 like:- 0,3,6..
      </strong>
      <h3>{count}</h3>
      <button onClick={handleInc}>Increment by 3</button>
      <p>
        to get the count increment by 3 we must give the callback function to
        setFunction to hold the prev value and then update it with new one
      </p>
    </>
  );
};
