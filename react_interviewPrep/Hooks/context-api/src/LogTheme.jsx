// LogTheme.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const LogTheme = () => {
  const { logged, isLoggedIn } = useContext(ThemeContext);

  return (
    <div>
      <h1>User Login Checker</h1>
      <h3>Result: {logged}</h3>
      <button onClick={isLoggedIn}>Login</button>
    </div>
  );
};