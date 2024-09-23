import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as CloseIcon } from '@svg/close.svg';
import {
  useSnackBarActions,
  useSnackBarActive,
  useSnackBarHighlight,
  useSnackBarLinkText,
  useSnackBarPage,
  useSnackBarText,
} from '@state/toast/SnackBarStore';
import { useNavigate } from 'react-router-dom';

const SnackBar = () => {
  const navigate = useNavigate();
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
    <ToastContainer $active={active}>
      <MainText>
        {highlight !== '' ? (
          <>
            {textArr[0]}
            <HighlightText>{highlight}</HighlightText>
            {textArr[1]}
          </>
        ) : (
          text
        )}
      </MainText>
      {linkText !== '' && (
        <NavigateButton onClick={clickHandler}>{linkText}</NavigateButton>
      )}
      <CloseButton onClick={() => setActive(false)}>
        <CloseIcon
          width={16}
          height={16}
          fill={semantic.light.inverse.solid.normal}
        />
      </CloseButton>
    </ToastContainer>
  );
};

export default SnackBar;

const toastFadeIn = keyframes`
  100% {
    opacity: 1;
    top: 90%;
  }
  `;

const ToastContainer = styled.div<{ $active: boolean }>`
  display: flex;
  padding: var(--gap-sm, 0.75rem) var(--gap-lg, 1.25rem) var(--gap-sm, 0.75rem)
    var(--gap-xl, 1.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-sm, 0.75rem);

  position: fixed;
  top: 100%;
  left: 50%;
  transform: translate(-50%);

  border-radius: var(--radius-round, 6rem);
  background: ${semantic.light.inverse.solid.bg};

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.06),
    0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.13);

  color: ${semantic.light.inverse.solid.hero};
  text-align: center;
  animation: ${props => props.$active && toastFadeIn} 1s 1s ease forwards;
`;

const MainText = styled.p`
  color: ${semantic.light.inverse.solid.hero};
  text-align: center;
  ${TYPO.label2}
`;

const HighlightText = styled.span`
  color: ${semantic.light.inverse.solid.accent};
`;

const NavigateButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);

  color: ${semantic.light.inverse.solid.normal};
  text-align: center;
  ${TYPO.label2}
`;

const CloseButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem);
`;
