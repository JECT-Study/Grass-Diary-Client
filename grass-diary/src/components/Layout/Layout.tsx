import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SnackBar from './SnackBar';
import { Toast, Modal } from '@components/index';
import { ThemeProvider } from 'styled-components';
import { semantic } from '@styles/semantic';
import useTheme from '@hooks/useTheme';

const Layout = () => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? semantic.dark : semantic.light}>
      <Header />
      <Outlet />
      <Toast />
      <Modal />
      <SnackBar />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
