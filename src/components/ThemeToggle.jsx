// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Theme"
      className="text-xl p-2 rounded-full transition duration-300 hover:scale-110 hover:ring-2 ring-blue-400 dark:ring-purple-500"
    >
      {dark ? (
        <FiMoon className="text-purple-400 hover:text-purple-300 transition" />
      ) : (
        <FiSun className="text-yellow-500 hover:text-yellow-400 transition" />
      )}
    </button>
  );
};

export default ThemeToggle;
