import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';

export const Title = styled.p`
  color: ${semantic.light.object.transparent.assistive};

  ${TYPO.body2}
`;
