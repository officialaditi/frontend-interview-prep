import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// costume hook that return useContext with ThemeContext we provide
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleThemeBtn = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [isDarkMode, theme])

  return (
    <ThemeContext.Provider value={{ toggleThemeBtn, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
