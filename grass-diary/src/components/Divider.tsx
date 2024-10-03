import styled from 'styled-components';

interface IDividerProps {
  width?: string;
  color?: string;
}

const Divider = ({ width, color }: IDividerProps) => {
  return <DividerLine $dividerWidth={width} $dividerColor={color} />;
};

export default Divider;

const DividerLine = styled.div<{
  $dividerColor?: string;
  $dividerWidth?: string;
}>`
  width: ${({ $dividerWidth }) => $dividerWidth || '20rem'};
  height: 0.0625rem;

  background: ${({ $dividerColor, theme }) =>
    $dividerColor ? $dividerColor : `${theme.border.transparent.neutral}`};
`;
