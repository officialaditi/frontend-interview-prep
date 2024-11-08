import { Condition1 } from "./components/Condition1";
import { Condition2 } from "./components/Condition2";
import { NullishChaining } from "./components/NullishChaining";
import { OptionalChaining } from "./components/OptionalChaining";

const App = () => {
  return (
    <div>
      <h1>Difference between && (and) vs || (or) operator</h1>
      <h4>
        && = <strong>RETURN</strong> only if{" "}
        <span style={{ color: "red" }}>Both</span> the operand is <i>TRUE</i>{" "}
        (true && true = return)
      </h4>
      <h4>
        || = <strong>RETURN</strong> when any{" "}
        <span style={{ color: "red" }}>1</span> of the operand is <i>TRUE</i>{" "}
        (true || false = return )
      </h4>
      <p>Example 1 :- && operator </p>
      <Condition1 />
      <p>Example 2:- || operator</p>
      <Condition2 />
      <h1>Difference between (?) and (??)</h1>
      <p>Example :- OptionalChaining ? </p>
      <OptionalChaining/>
      <p>Example:- NullishChaining ??</p>
      <NullishChaining/>
    </div>
  );
};
export default App;
