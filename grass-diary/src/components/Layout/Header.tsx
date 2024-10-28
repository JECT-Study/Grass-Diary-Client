import * as S from '@styles/component/Layout/Header.style';
import sampleLogo from '@image/sampleLogo.png';
import MenuBar from './MenuBar';
import { Profile } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@state/user/useUser';
import { useModal } from '@state/modal/useModal';
import { useEffect } from 'react';
import { MODAL } from '@constants/message';
import { semantic } from '@styles/semantic';
import { INTERACTION } from '@styles/interaction';
import { useAuthExpDate } from '@state/auth/authStore';
import useExpDate from '@state/auth/useExpDate';
import useLogout from '@hooks/useLogout';

const Header = () => {
  const memberId = useUser();
  const { loginModal, modal } = useModal();
  const navigate = useNavigate();
  const clearAuth = useLogout();
  const expDate = useAuthExpDate();
  const { handleExpDate } = useExpDate();

  const hasExpired = (expirationDate: Date) => {
    if (!expirationDate) return false;
    const currentDate = new Date();
    const timeDiff = expirationDate.getTime() - currentDate.getTime();
    return timeDiff <= 0 ? true : false;
  };

  // 로그인 만료 타이머
  useEffect(() => {
    let expireInterval: NodeJS.Timeout;
    if (!expDate) handleExpDate();

    if (expDate) {
      expireInterval = setInterval(() => {
        if (hasExpired(expDate)) {
          const setting = {
            title: MODAL.authentication_error.title,
            content: MODAL.authentication_error.content,
          };

          const button1 = {
            active: true,
            text: MODAL.confirm,
            color: semantic.light.accent.solid.hero,
            interaction: INTERACTION.accent.subtle(),
            clickHandler: () => (window.location.href = '/'),
          };

          clearAuth(true);
          clearInterval(expireInterval);
          modal(setting, button1);
        }
      }, 60000);
    }

    return () => {
      if (expireInterval) clearInterval(expireInterval);
    };
  }, [memberId, expDate]);

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
