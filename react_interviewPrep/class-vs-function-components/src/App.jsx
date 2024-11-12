import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";

 const App = () => {
  return (
    <>

      <h1>Class Component VS Functional Component</h1>
      <strong style={{color: 'red'}}><i>Component are the piece of code, that represent the UI basically its an function that accept the props object and return the jsx.</i> </strong>
      <h3>What are Class based component in React?</h3>
      <Question1/>
      <h3>What are functional based component in React??</h3>
      <Question2/>
      <h3>What are Hooks? explain any 2</h3>
      <Question3/>
      
    </>
  );
};
export default App;