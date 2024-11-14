import { LogTheme } from "./LogTheme";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <h1>Understanding useContext Hook</h1>
      <div>Hello, Welcome to the Themed App!</div>
      <ThemeToggle />
      <LogTheme />
    </ThemeProvider>
  );
};

export default App;

// summary:-

// 1) createContext = create a context to store data

// 2) useContext = Allow component to acces the context data.

// 3) provider = wrap around component to make the context data available to them
