import * as S from '@styles/component/Layout/Header.style';
import sampleLogo from '@image/sampleLogo.png';
import MenuBar from './MenuBar';
import { Profile } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@state/user/useUser';
import { useModal } from '@state/modal/useModal';

const Header = () => {
  const memberId = useUser();
  const { loginModal } = useModal();
  const navigate = useNavigate();

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
          <S.LoginButton onClick={loginModal}>로그인</S.LoginButton>
        )}
      </S.Container>
    </S.Header>
  );
};

export default Header;
