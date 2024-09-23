import { ReactComponent as LeftArrow } from '@svg/chevron_left.svg';
import { INTERACTION } from '@styles/interaction';
import { semantic } from '@styles/semantic';
import styled from 'styled-components';

export const ArrowButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem);
  border-radius: var(--radius-2xs, 0.25rem);
  ${INTERACTION.default.normal()}
`;

export const ArrowIcon = styled(LeftArrow)`
  fill: ${semantic.light.object.transparent.neutral};
  cursor: pointer;
`;
