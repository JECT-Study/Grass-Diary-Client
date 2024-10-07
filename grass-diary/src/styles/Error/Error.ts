import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import { INTERACTION } from '@styles/interaction';

export const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(241, 241, 241, 0.3) 100%
    ),
    ${semantic.light.bg.solid.subtler};
`;

export const ErrorSection = styled.section`
  margin: auto;
  display: flex;
  max-width: var(--vw-desktop-min, 60rem);
  height: 100vh;
  height: 100dvh;
  padding: var(--gap-7xl, 4.5rem) var(--gap-xl, 1.5rem);
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: center;

  border-right: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  border-left: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.subtlest};
`;

export const ErrorText = styled.h1`
  color: ${semantic.light.object.transparent.neutral};
  text-align: center;
  ${TYPO.body4}
`;

export const mainButton = styled.button`
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
