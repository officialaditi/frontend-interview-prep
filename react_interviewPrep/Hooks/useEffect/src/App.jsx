import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Question4 } from "./Question4";

const App = () => {
  return (
    <>
      <h1>All About useEffect hook:-</h1>
      <h2>Question 1 :- What is useEffect hook?</h2>
      <Question1 />
      <h2>Question 2 :- Why is dependency array is used in useEffect?</h2>
      <Question2 />
      <h2>Question 3 :- Example of useEffect for fetching data .</h2>
      <Question3/>
      <h2>Question 4 :- How to perform the cleanup function in useEffect? Explain with example</h2>
      <Question4/>
      
    </>
  );
};
export default App;
