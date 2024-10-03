import { useState } from 'react';

const useTheme = () => {
  const localTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(localTheme === 'dark');

  const setDarkMode = () => {
    setIsDarkMode(true);
    localStorage.setItem('theme', 'dark');
  };

  const setLightMode = () => {
    setIsDarkMode(false);
    localStorage.setItem('theme', 'light');
  };

  return { isDarkMode, setDarkMode, setLightMode };
};

export default useTheme;
