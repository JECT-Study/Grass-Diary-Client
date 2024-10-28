import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import styled, { keyframes } from 'styled-components';

export const toastFadeIn = keyframes`
  100% {
    opacity: 1;
    top: 90%;
    @media screen and (max-width: 60em) {
     top: 87%
    };
  }
  `;

export const toastFadeInMobile = keyframes`
  100% {
    opacity: 1;
    top: 87%
  }
  `;

export const ToastContainer = styled.div<{ $active: boolean }>`
  display: ${props => (props.$active ? 'flex' : 'none')};
  padding: var(--gap-sm, 0.75rem) var(--gap-lg, 1.25rem) var(--gap-sm, 0.75rem)
    var(--gap-xl, 1.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-sm, 0.75rem);

  position: fixed;
  top: 100%;
  left: 50%;
  transform: translate(-50%);

  border-radius: var(--radius-md, 1rem);
  background: ${semantic.light.inverse.solid.bg};

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.06),
    0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.13);

  color: ${semantic.light.inverse.solid.hero};
  text-align: center;
  animation: ${props => props.$active && toastFadeIn} 1s 1s ease forwards;

  @media screen and (max-width: 60em) {
    width: 18rem;
    padding: var(--gap-xs, 0.625rem);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-empty, 0rem);

    animation: ${props => props.$active && toastFadeInMobile} 1s 1s ease
      forwards;
  }
`;

export const MainText = styled.p`
  white-space: nowrap;
  color: ${semantic.light.inverse.solid.hero};
  text-align: center;
  ${TYPO.label2}

  @media screen and (max-width: 60em) {
    padding-left: var(--gap-xs, 0.625rem);
    ${TYPO.body1}
  }
`;

export const HighlightText = styled.span`
  color: ${semantic.light.inverse.solid.accent};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.75rem);
  @media screen and (max-width: 60em) {
    padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);
    gap: var(--gap-2xs, 0.5rem);
  }
`;

export const NavigateButton = styled.button`
  white-space: nowrap;
  display: flex;
  padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);

  color: ${semantic.light.inverse.solid.normal};
  text-align: center;
  ${TYPO.label2}
  @media screen and (max-width: 60em) {
    padding: 0rem;
    ${TYPO.label1}
  }
`;

export const CloseButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem);
`;
