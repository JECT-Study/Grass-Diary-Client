import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { checkAuth } from '@utils/authUtils';
import { PopularFeed, Container, Callout } from '@components/index';

import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';
import Spacer from './Spacer';
import { useAuthActions } from '@state/auth/authStore';
import { MAIN_MESSAGES } from '@constants/message';

const Main = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setIsLoading } = useAuthActions();

  useEffect(() => {
    const initLoad = async () => {
      setIsLoading(true);
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get('accessToken');

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);

        const mainURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
        window.history.pushState({ path: mainURL }, '', mainURL);

        setIsAuthenticated(true);
      }

      if (!accessToken) {
        const isAuthenticated = await checkAuth();
        setIsAuthenticated(isAuthenticated);

        if (!isAuthenticated) navigate('/');
      }

      setIsLoading(false);
    };

    initLoad();
  }, [navigate]);

  return (
    <Container>
      <TopSection />
      <MiddleSection />
      <BottomSection />
      <PopularFeed />
      <div style={{ padding: '4rem' }}>
        <Callout message={MAIN_MESSAGES.banner.future_content_message} />
      </div>
      <Spacer />
    </Container>
  );
};

export default Main;
