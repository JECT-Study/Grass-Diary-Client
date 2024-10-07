import { ERROR } from '@constants/message';
import * as S from '@styles/Error/Error';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  return (
    <>
      <S.Container>
        <S.ErrorSection>
          <S.ErrorText>{location.state}</S.ErrorText>
        </S.ErrorSection>
      </S.Container>
    </>
  );
};

export default ErrorPage;
