import styled from 'styled-components';
import { TYPO } from '@styles/typo';

export const Section = styled.div`
  display: flex;
  padding: var(--gap-lg, 1.25rem) var(--gap-xl, 1.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-xl, 1.5rem);
  align-self: stretch;
`;

export const Container = styled.div`
  display: flex;
  max-width: var(--vw-desktop-min, 60rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-xl, 1.5rem);
  flex: 1 0 0;

  @media screen and (max-width: 60em) {
    display: flex;
    max-width: var(--vw-desktop-min, 60rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap-xl, 1.5rem);
    flex: 1 0 0;
  }
`;

export const Card = styled.div`
  display: flex;
  padding: var(--gap-lg, 1.25rem);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-md, 1rem);
  flex: 1 0 0;

  border-radius: var(--radius-md, 1rem);
  border: ${({ theme }) => `var(--stroke-thin, 0.0625rem) solid
    ${theme.border.transparent.assistive}`};

  background: ${({ theme }) => theme.bg.solid.normal};

  box-shadow:
    0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.04),
    0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 60em) {
    display: flex;
    padding: var(--gap-lg, 1.25rem);
    width: 19em;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-md, 1rem);
  }
`;

export const Divider = styled.div`
  width: 26.75rem;
  height: 0.0625rem;

  background: ${({ theme }) => theme.border.transparent.alternative};

  @media screen and (max-width: 60em) {
    width: 16em;
  }
`;

export const CardText = styled.p`
  align-self: stretch;

  ${TYPO.label3}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const CardSubText = styled.p`
  align-self: stretch;

  ${TYPO.caption2}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
`;

export const RewardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
  flex: 1 0 0;
`;

export const RewardPointBox = styled.div`
  flex: 1 0 0;
  color: ${({ theme }) => theme.accent.solid.normal};
`;

export const ThemeMarketBtn = styled.button`
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: ${({ theme }) =>
    `var(--stroke-thin, 0.0625rem) solid ${theme.accent.solid.normal}`};

  background: ${({ theme }) => theme.accent.transparent.normal};

  cursor: pointer;
`;

export const ThemeMarketText = styled.p`
  text-align: center;

  ${TYPO.label2}
  color: ${({ theme }) => theme.accent.solid.hero};
`;

export const RetrospectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
`;

export const RetrospectBtn = styled.button`
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  background: ${({ theme }) => theme.fill.transparent.alternative};
`;

export const RetrospectText = styled.p`
  text-align: center;

  ${TYPO.label2}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;
