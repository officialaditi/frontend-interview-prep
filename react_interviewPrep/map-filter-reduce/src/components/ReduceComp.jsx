import { data } from "../data";

export const ReduceComp = () => {
  return (
    <h3>
        Total Summary of all products:- $
        {data.reduce((acc, product) => {
            return  acc + product.price;
        },0)}
    </h3>
  );
};
