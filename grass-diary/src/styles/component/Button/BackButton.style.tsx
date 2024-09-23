import styled from 'styled-components';

import { INTERACTION } from '@styles/interaction';
import { ReactComponent as LeftArrow } from '@svg/chevron_left.svg';

export const ArrowButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem);
  border-radius: var(--radius-2xs, 0.25rem);

  ${INTERACTION.default.normal()}
`;

export const ArrowIcon = styled(LeftArrow)`
  fill: ${({ theme }) => theme.object.transparent.neutral};
  cursor: pointer;
`;
