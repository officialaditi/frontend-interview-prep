import { data } from "../data";

export const FilterComp = () => {
  return (
    <ul>
      {data
        .filter((prod) => prod.category === "Home & Kitchen")
        .map((product) => {
          return (
            <li key={product.id}>
              {product.name}, <strong>{product.category}</strong>
            </li>
          );
        })}
    </ul>
  );
};
