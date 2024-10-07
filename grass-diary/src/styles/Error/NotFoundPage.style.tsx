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

  gap: var(--gap-2xl, 2rem);

  border-right: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  border-left: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.subtlest};
`;

export const ErrorTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
  text-align: center;
`;

export const HeaderText = styled.h1`
  color: ${semantic.light.object.solid.hero};

  ${TYPO.display1}
  @media screen and (max-width: 60em) {
    ${TYPO.title3}
  }
`;

export const GuideText = styled.span`
  color: ${semantic.light.object.transparent.neutral};
  ${TYPO.body4}
  @media screen and (max-width: 60em) {
    ${TYPO.body1}
  }
`;

export const ErrorCode = styled.span`
  color: ${semantic.light.object.transparent.assistive};
  ${TYPO.caption3}
`;

export const ButtonText = styled.span`
  color: ${semantic.light.object.transparent.alternative};
  ${TYPO.label3}
`;

export const MainButton = styled.button`
  display: flex;
  padding: var(--gap-sm, 0.75rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-sm, 0.75rem);
  border: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.normal};
  ${INTERACTION.default.normal(semantic.light.bg.solid.normal)}
`;
