import { useState } from 'react';

const useTheme = () => {
  const localTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(
    localTheme === 'dark' ? true : false,
  );

  const switchTheme = () => {
    setIsDarkMode(prev => {
      const changeTheme = !prev;
      localStorage.setItem('theme', changeTheme ? 'dark' : 'light');

      return changeTheme;
    });
  };

  return { isDarkMode, switchTheme };
};

export default useTheme;
