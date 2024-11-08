export const Condition2 = () => {
  const x = 0;
  const y = 10;
  if (x > 0 || y > 0) {
    return (
      <span>
        Yess, X and Y are greater than 0,{" "}
        <strong>this operator ran because of y condition got true</strong>
      </span>
    );
  } else return <></>;
};
