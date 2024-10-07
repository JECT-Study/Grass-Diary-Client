import { semantic } from '@styles/semantic';
import * as S from '@styles/component/Notification/SnackBar.style';
import { ReactComponent as CloseIcon } from '@svg/close.svg';
import { ReactComponent as Arrow } from '@svg/chevron_right.svg';
import {
  useSnackBarActions,
  useSnackBarActive,
  useSnackBarHighlight,
  useSnackBarLinkText,
  useSnackBarPage,
  useSnackBarText,
} from '@state/toast/SnackBarStore';
import { useNavigate } from 'react-router-dom';
import useIsMobile from '@hooks/useIsMobile';

const SnackBar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const active = useSnackBarActive();
  const text = useSnackBarText();
  const highlight = useSnackBarHighlight();
  const linkText = useSnackBarLinkText();
  const page = useSnackBarPage();
  const { setActive } = useSnackBarActions();

  const textArr = text.split(highlight);

  const clickHandler = () => {
    navigate(page);
    setActive(false);
  };

  return (
    <S.ToastContainer $active={active}>
      <S.MainText>
        {highlight !== '' ? (
          <>
            {textArr[0]}
            <S.HighlightText>{highlight}</S.HighlightText>
            {textArr[1]}
          </>
        ) : (
          text
        )}
      </S.MainText>
      <S.ButtonContainer>
        {linkText !== '' && (
          <S.NavigateButton onClick={clickHandler}>{linkText}</S.NavigateButton>
        )}

        <S.CloseButton
          onClick={() => {
            isMobile ? clickHandler() : setActive(false);
          }}
        >
          {isMobile ? (
            <Arrow
              width={16}
              height={16}
              fill={semantic.light.inverse.solid.normal}
            />
          ) : (
            <CloseIcon
              width={16}
              height={16}
              fill={semantic.light.inverse.solid.normal}
            />
          )}
        </S.CloseButton>
      </S.ButtonContainer>
    </S.ToastContainer>
  );
};

export default SnackBar;
