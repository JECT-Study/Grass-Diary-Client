import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonContainerProps {
  children: ReactNode;
}

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return <Btn>{children}</Btn>;
};

export default ButtonContainer;

const Btn = styled.div`
  flex: 1;
  position: relative;
  display: inline-flex;
  white-space: nowrap;
`;