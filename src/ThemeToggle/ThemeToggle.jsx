import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
 const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const prefersDarkMode = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (prefersDarkMode) {
      setIsDarkMode(true);
    }
  }, [prefersDarkMode]);

  return (
    <button
      className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
export default ThemeToggle