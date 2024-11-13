import { useEffect, useRef } from "react";

export const Question3 = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <ul>
        <li>
          real life scenerio:- if the page got load we want the focus on the
          input
        </li>
        <li>how can we do that? example:-</li>
      </ul>
      <input ref={inputRef} />
      <p>as soon as the page get loaded, input will have the focus</p>
    </>
  );
};
