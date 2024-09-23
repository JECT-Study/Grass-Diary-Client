import styled from 'styled-components';

const Container = ({ children }: IContainer) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.bg.solid.subtler};
`;
