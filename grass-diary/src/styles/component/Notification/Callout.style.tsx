import styled from 'styled-components';
import { TYPO } from '@styles/typo';

export const Container = styled.div`
  display: flex;
  align-self: center;
  padding: var(--gap-3xs, 0.375rem) var(--gap-sm, 0.75rem);
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: ${({ theme }) => `var(--stroke-thin, 0.0625rem) solid
    ${theme.border.transparent.alternative}`};

  background: ${({ theme }) => theme.fill.transparent.assistive};
`;

export const Text = styled.p`
  ${TYPO.caption2}
  color: ${({ theme }) => theme.object.transparent.alternative};

  @media screen and (max-width: 60em) {
    ${TYPO.caption1}
  }
`;
