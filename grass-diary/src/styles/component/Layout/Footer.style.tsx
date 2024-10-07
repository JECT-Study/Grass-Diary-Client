import styled from 'styled-components';
import { TYPO } from '@styles/typo';
import { semantic } from '@styles/semantic';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-xl, 1.5rem);
  padding: var(--gap-xl, 1.5rem);
  border-top: var(--stroke-thicker, 0.25rem) solid
    ${semantic.light.accent.solid.hero};
  background: ${semantic.light.base.solid.darkgray};
`;

export const Container = styled.div`
  display: flex;
  width: var(--vw-desktop-min, 60rem);
  min-width: 20rem;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);
  align-self: stretch;

  @media screen and (max-width: 60em) {
    gap: var(--gap-xl, 1.5rem);
  }
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex: 1;

  @media screen and (max-width: 60em) {
    flex-direction: column;
    gap: var(--gap-lg, 1.25rem);
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-xs, 0.625rem);
  flex: 1 0 0;
`;

export const LogoIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);
  flex: 1 0 0;
`;

export const FooterButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
  color: ${semantic.light.base.solid.white};
  text-align: center;
  ${TYPO.label2}
`;

export const CopyRightContainer = styled.div`
  margin-left: auto;
  @media screen and (max-width: 60em) {
    margin: auto;
  }
`;

export const Text = styled.span`
  ${TYPO.caption2};
  color: ${semantic.light.base.solid.white};
  @media screen and (max-width: 60em) {
    display: block;
    text-align: center;
  }
`;
