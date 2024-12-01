import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="theme-toggle"
      onClick={toggleTheme}
      title="Toggle Light/Dark"
    >
      <button className="theme-button">{isDarkMode ? "🌙" : "☀️"}</button>
    </div>
  );
};

export default ThemeToggle;
