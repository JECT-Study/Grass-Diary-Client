import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { ReactComponent as LogoSVG } from '@svg/logo.svg';
import { INTERACTION } from '@styles/interaction';
import { TYPO } from '@styles/typo';

export const FeedButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: var(--gap-5xs, 0.125rem) var(--gap-sm, 0.75rem);
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-xs, 0.5rem);
  color: ${semantic.light.object.solid.normal};
  text-align: center;
  white-space: nowrap;
  ${TYPO.title1}

  ${INTERACTION.default.normal()}
`;

export const Header = styled.header`
  z-index: 995;
  position: sticky;
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-xl, 1.5rem);
  justify-content: center;
  align-items: center;

  border-bottom: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.subtlest};

  @media screen and (max-width: 60em) {
    min-width: 20em;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: var(--vw-desktop-min, 60rem);
  align-items: center;
  gap: var(--gap-lg, 1.25rem);
  flex: 1 0 0;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;

export const LogoButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--gap-xs, 0.625rem);
`;

export const LogoImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

export const LogoIcon = styled(LogoSVG)`
  width: 4.47663rem;
  height: 1.125rem;
  fill: ${semantic.light.object.solid.normal};
`;

export const MenuBarBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
`;

export const LoginButton = styled.button`
  display: flex;
  background: none;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;

  gap: var(--gap-2xs, 0.5rem);
  color: ${semantic.light.base.solid.white};
  border-radius: var(--radius-xs, 0.5rem);
  background: ${semantic.light.accent.solid.normal};
  white-space: nowrap;
  ${INTERACTION.default.normal(semantic.light.accent.solid.normal)}
`;
