import React from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`absolute top-1 left-1 transform ${
          darkMode ? "translate-x-6" : "translate-x-0"
        } w-4 h-4 bg-white rounded-full transition-transform duration-300`}
      />

      <span
        className={`absolute top-1 left-1 text-yellow-500 transition-opacity duration-300 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        <Sun size={16} />
      </span>

      <span
        className={`absolute top-1 right-1 text-purple-300 transition-opacity duration-300 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <Moon size={16} />
      </span>
    </button>
  );
};

export default ThemeToggle;
