import { useNavigate } from 'react-router-dom';

import MenuBar from './MenuBar';
import sampleLogo from '@image/sampleLogo.png';
import * as S from '@styles/component/Layout/Header.style';
import { Profile } from '@components/index';
import { useUser } from '@state/user/useUser';

const Header = () => {
  const memberId = useUser();
  const navigate = useNavigate();

  const handleGoogleLogin: TGoogleLogin = () => {
    window.open(`http://localhost:8080/api/auth/google`, '_self');
  };

  return (
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
  );
};

export default Header;
