// this is ThemeContext.js file

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [logged, setLogged] = useState("login");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isLoggedIn = () => {
    setLogged((prevLogged) =>
      prevLogged === "login" ? "yes User Logged In" : "no User Login first"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, logged, isLoggedIn }}>
      {children}
    </ThemeContext.Provider>
  );
};

// themeContext:- this context will store the theme and provide the [toggleTheme] function. it like an container for all the shared data.

// ThemeProvider:- this component wraps around the parts of your app that need access to the theme. it uses [themeContext.Provider] to pass down the theme and toggleTheme function to any component within it
