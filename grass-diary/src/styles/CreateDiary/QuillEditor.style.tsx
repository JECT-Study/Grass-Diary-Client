import styled from 'styled-components';
import { TYPO } from '@styles/typo';

export const Title = styled.p`
  ${TYPO.body2}
  color: ${({ theme }) => theme.object.transparent.assistive};
`;
