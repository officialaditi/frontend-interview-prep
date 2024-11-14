import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { BlogScreen } from "./screens/BlogScreen";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <>
      <h1 className="main">Machine Coding Round 1</h1>
      <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
export default App;
