import styled from 'styled-components';
import { TYPO } from '@styles/typo';
import { semantic } from '@styles/semantic';

export const Footer = styled.footer`
  align-self: stretch;
  display: flex;
  padding: var(--gap-xl, 1.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-xl, 1.5rem);

  border-top: var(--stroke-thicker, 0.25rem) solid
    ${semantic.light.accent.solid.hero};
  background: ${semantic.light.base.solid.darkgray};
`;

export const Container = styled.div`
  display: flex;
  max-width: var(--vw-desktop-min, 60rem);
  min-width: 20rem;
  align-items: center;
  align-self: stretch;
  flex: 1;

  @media screen and (max-width: 60em) {
    flex-direction: column;
    gap: var(--gap-md, 1rem);
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

export const CopyRightText = styled.p`
  color: ${semantic.light.base.solid.white};
  ${TYPO.caption2}
`;
