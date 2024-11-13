import { useRef } from "react";

export const Question2 = () => {
  const inputRef = useRef(null);

  return (
    <>
      <ul>
        <li>Accessing the DOM element or managing the focus</li>
        <li>
          storing mutuable value that persist without causing the re-render
        </li>
        <li>caching the values to avoid re-initialization on re-render</li>
        <li>
          Note:- <strong>By default every jsx have ref property</strong>
        </li>
      </ul>
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = "Aditi added by button click";
        }}
      >
        set Focus
      </button>
    </>
  );
};
