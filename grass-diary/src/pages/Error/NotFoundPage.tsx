import Footer from '@components/Layout/Footer';
import Header from '@components/Layout/Header';
import useIsMobile from '@hooks/useIsMobile';
import * as S from '@styles/Error/NotFoundPage.style';
import { semantic } from '@styles/semantic';
import errorIcon from '@svg/error_outline.svg';
import { ReactComponent as Arrow } from '@svg/chevron_right.svg';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const linkToMain = () => {
    navigate('/main');
  };
  return (
    <>
      <Header />
      <S.Container>
        <S.ErrorSection>
          <img src={errorIcon} alt="error_image" />
          <S.ErrorTextBox>
            <S.HeaderText>
              페이지를{isMobile ? <br /> : ' '}찾을 수 없어요
            </S.HeaderText>
            <S.GuideText>
              주소가 잘못 입력되었거나 변경되었을 수 있어요. <br />
              정확한 주소인지 다시 한 번 확인해 주세요!
            </S.GuideText>
            <S.ErrorCode>HTTP 상태 코드 : 404</S.ErrorCode>
          </S.ErrorTextBox>
          <S.MainButton onClick={linkToMain}>
            <S.ButtonText>메인 페이지로</S.ButtonText>
            <Arrow
              width={20}
              height={20}
              fill={semantic.light.object.transparent.alternative}
            />
          </S.MainButton>
        </S.ErrorSection>
      </S.Container>
      <Footer />
    </>
  );
};

export default NotFoundPage;
