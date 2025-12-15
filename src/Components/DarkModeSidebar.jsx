import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const SimpleThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: isDark ? "#1e293b" : "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
      }}
    >
      {isDark ? (
        <FaMoon color="#FFD43B" size={20} />
      ) : (
        <FaSun color="#fbbf24" size={20} />
      )}
    </button>
  );
};

export default SimpleThemeToggle;
