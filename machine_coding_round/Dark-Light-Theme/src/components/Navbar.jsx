import { Link } from "react-router-dom";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

import { useTheme } from "../ThemeContext";

export const Navbar = () => {
  const { toggleThemeBtn, theme } = useTheme();

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <span onClick={toggleThemeBtn}>
          {theme === "dark" ? <IoMoon /> : <IoSunnyOutline />}
        </span>
      </div>
    </nav>
  );
};
