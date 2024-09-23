import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { GlobalStyle } from './styles/GlobalStyle';
import useTheme from '@hooks/useTheme';

const App = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const root = document.body;

    if (isDarkMode) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }, [isDarkMode]);

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
