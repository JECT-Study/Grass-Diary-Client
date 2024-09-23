import * as S from '@styles/component/Button/BackButton.style';
import { useNavigate, useLocation } from 'react-router-dom';

interface IBackButtonProps {
  goBackTo?: string;
}

const BackButton = ({ goBackTo }: IBackButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    if (goBackTo) {
      return navigate(goBackTo);
    }
    if (location.state === 'editcomplete') {
      return navigate(-2);
    }
    navigate(-1);
  };
  return (
    <S.ArrowButton onClick={goBack}>
      <S.ArrowIcon width={24} height={24} />
    </S.ArrowButton>
  );
};

export default BackButton;
