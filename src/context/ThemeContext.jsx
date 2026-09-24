import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'bg-deepNavy text-white min-h-screen' : 'bg-white text-darkText min-h-screen'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};