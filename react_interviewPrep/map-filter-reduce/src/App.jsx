import { FilterComp } from "./components/FilterComp";
import MapComp from "./components/MapComp";
import { ReduceComp } from "./components/ReduceComp";

const App = () => {
  return (
    <div>
      <h1>
        Learning how to use condition and <i>Map</i>,<i>Filter</i>,{" "}
        <i>Reduce</i>
      </h1>
     <h2>Ques-1:- Render all the product data using the map function</h2>
     <MapComp/>
     <h2>Ques-2:- How can you filter that product with specific category?</h2>
     <FilterComp/>
     <h2>Ques-3:- How to render the summary of total prices for products?</h2>
     <ReduceComp/>
    </div>
  );
};
export default App;
