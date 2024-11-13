import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Question4 } from "./Question4";



const App = () => {
  return (
    <>
    <h1>All about useRef Hooks:-</h1>
    <h2>Question 1:- what is useRef hook</h2>
    <Question1/>
    <h2>Question 2:- when would you use useRef?</h2>
    <Question2/>
    <h2>Question 3:- how do we access the DOM element using useRef?</h2>
    <Question3/>
    <h2>Difference between useState and useRef</h2>
    <Question4/>
    </>
  )

}
export default App;