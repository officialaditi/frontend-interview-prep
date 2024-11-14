import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>{theme === "light" ? "Dark" : "Light"}</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </>
  );
};
export default ThemeToggle;

// access the context with [useContext];

// ThemeToggle component use [useContext] hook to access and switch theme
// useContext(ThemeContext)=> hook grabs the current [theme] value and the [toggleTheme] function from 'ThemeContext'
