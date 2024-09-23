import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';

export const Container = styled.div`
  display: flex;
  align-self: center;
  padding: var(--gap-3xs, 0.375rem) var(--gap-sm, 0.75rem);
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: var(--stroke-thin, 0.0625rem) solid
    ${semantic.light.border.transparent.alternative};

  background: ${semantic.light.fill.transparent.assistive};
`;

export const Text = styled.p`
  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}

  @media screen and (max-width: 60em) {
    ${TYPO.caption1}
  }
`;

export const Space = styled.div`
  @media screen and (max-width: 60em) {
    font-size: 1em;
  }
`;
