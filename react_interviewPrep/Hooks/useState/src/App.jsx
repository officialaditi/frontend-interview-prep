import { DataBinding } from "./DataBinding";
import { Form } from "./Form";
import { OutputQues } from "./OutputQues";
import { UseStateComp } from "./UseStateComp";

const App = () => {
  return (
    <>
      <h1>useState HOOK</h1>
      <UseStateComp />
      <h1>What will be the output?</h1>
      <OutputQues />
      <h1>what is two way data binding and how you can achieve it in react?</h1>
      <DataBinding />
      <h1>
        Build the form with the field firstname, lastname, and email, use only
        one state to manage all field
      </h1>
      <Form/>
    </>
  );
};
export default App;
