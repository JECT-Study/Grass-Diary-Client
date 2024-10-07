import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import styled, { keyframes } from 'styled-components';

export const toastFadeIn = keyframes`
30% {
  top: 90%;
}

70% {
  opacity: 1;
  top: 90%;
}

100% {
  opacity: 0;
  top: 100%;
}
`;

export const ToastBox = styled.div<{ $active: boolean; $isRed: boolean }>`
  white-space: nowrap;
  display: ${props => (props.$active ? 'block' : 'none')};
  position: fixed;
  top: 100%;
  left: 50%;
  transform: translate(-50%);

  padding: var(--gap-sm, 0.75rem) var(--gap-xl, 1.5rem);
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-md, 1rem);
  background: ${props =>
    props.$isRed
      ? semantic.light.feedback.solid.negative
      : semantic.light.object.solid.hero};

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.06),
    0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.13);

  ${TYPO.label2}
  color: ${semantic.light.inverse.solid.hero};
  text-align: center;
  animation: ${props => props.$active && toastFadeIn} 3s 0.5s ease;
  transition: 1s;

  @media screen and (max-width: 60em) {
    ${TYPO.body1}
  }
`;
