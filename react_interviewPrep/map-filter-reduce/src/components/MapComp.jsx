import { data } from "../data";
const MapComp = () => {
  return (
    <ul>
      {data.map((prod) => {
        return (
          <li key={prod.id}>
            <strong>{prod.name}</strong>, <i>price:- ${prod.price}</i>,{" "}
            <strong>Category = {prod.category} </strong>
          </li>
        );
      })}
    </ul>
  );
};
export default MapComp;
