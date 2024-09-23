import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MenuBar from './MenuBar';
import sampleLogo from '@image/sampleLogo.png';
import useTheme from '@hooks/useTheme';
import * as S from '@styles/component/Layout/Header.style';
import { semantic } from '@styles/semantic';
import { Profile } from '@components/index';
import { useUser } from '@state/user/useUser';
import { API_URI } from '@services/index';

const Header = () => {
  const memberId = useUser();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleGoogleLogin: TGoogleLogin = () => {
    window.open(`${API_URI}/api/auth/google`, '_self');
  };

  return (
    <ThemeProvider theme={isDarkMode ? semantic.dark : semantic.light}>
      <S.Header>
        <S.Container>
          <S.LogoBox>
            <S.LogoButton onClick={() => navigate('/main')}>
              <S.LogoImage src={sampleLogo} />
              <S.LogoIcon />
            </S.LogoButton>
          </S.LogoBox>
          <S.FeedButton onClick={() => navigate('/share')}>피드</S.FeedButton>
          {memberId ? (
            <S.MenuBarBox>
              <Profile width="2rem" height="2rem" />
              <MenuBar />
            </S.MenuBarBox>
          ) : (
            <S.LoginButton onClick={handleGoogleLogin}>로그인</S.LoginButton>
          )}
        </S.Container>
      </S.Header>
    </ThemeProvider>
  );
};

export default Header;
