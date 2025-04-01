import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import sun from "../../assets/images/Sun.svg";
import moon from "../../assets/images/moon.svg";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 focus:outline-none transition-transform duration-200 hover:scale-110"
      onClick={toggleTheme}
      aria-label="Change Theme"
    >
      <img
        src={theme === "dark" ? sun : moon}
        alt="Theme Icon"
        width={30}
        className="transition-transform duration-200 hover:rotate-12"
      />
    </button>
  );
};

export default ThemeBtn;


