import styled from 'styled-components';

export const Box = styled.div<{ $justifyContent: string }>`
  display: flex;
  gap: 0.625rem
  justify-content: ${props => props.$justifyContent},
 
`;
