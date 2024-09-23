import styled from 'styled-components';
import { TYPO } from '@styles/typo';

export const Container = styled.div`
  display: flex;
  max-width: var(--vw-desktop-min, 60rem);
  padding: var(--gap-2xl, 2rem) var(--gap-xl, 1.5rem);
  flex-direction: column;
  align-items: center;
  gap: var(--gap-2xl, 2rem);

  @media screen and (max-width: 60em) {
    width: 22rem;
  }
`;

export const GrassLabel = styled.div`
  display: flex;
  padding: var(--gap-2xs, 0.5rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-3xs, 0.375rem);

  border-radius: var(--radius-sm, 0.75rem);
  border: ${({ theme }) => `var(--stroke-thin, 0.0625rem) solid
    ${theme.border.transparent.alternative}`};

  background: ${({ theme }) => theme.fill.transparent.alternative};
`;

export const GrassLabelText = styled.p`
  text-align: center;

  ${TYPO.label2}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;

export const GrassBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
  align-self: stretch;
`;

export const GrassBannerText = styled.p`
  align-self: stretch;
  text-align: center;

  ${TYPO.title1}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;

export const GrassBannerTextSecond = styled.p`
  align-self: stretch;
  text-align: center;

  ${TYPO.label2}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.accent.solid.normal};
`;

export const GrassTableBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 3.5rem);
  grid-gap: var(--gap-xs, 0.625rem);
  margin-bottom: 0.625rem;

  @media screen and (max-width: 60em) {
    display: grid;
    grid-template-columns: repeat(7, 2em);
    grid-gap: var(--gap-xs, 0.525rem);
    margin-bottom: 0.525rem;
  }
`;

export const DayBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  border-radius: var(--radius-sm, 0.75rem);
  background: ${({ theme }) => theme.fill.transparent.assistive};

  box-shadow:
    0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.04),
    0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 60em) {
    width: 2em;
    height: 2em;

    border-radius: var(--radius-sm, 0.75rem);
    background: ${({ theme }) => theme.fill.transparent.assistive};

    box-shadow:
      0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.04),
      0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08);
  }
`;
