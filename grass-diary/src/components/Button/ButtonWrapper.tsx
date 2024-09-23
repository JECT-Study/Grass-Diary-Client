import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonWrapperProps {
  children: ReactNode;
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return <Btn>{children}</Btn>;
};

export default ButtonWrapper;

const Btn = styled.div`
  flex: 1;
  position: relative;
  display: inline-flex;
  white-space: nowrap;
`;
