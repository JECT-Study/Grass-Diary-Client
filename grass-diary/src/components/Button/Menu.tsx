import * as S from '@styles/component/Button/Menu.style';

interface MenuProps {
  text: string;
  svg: string;
  onClick?: () => void;
  line?: number;
  color?: string;
}

const Menu = ({ onClick, text, svg, line, color }: MenuProps) => {
  const clickHandler = (event: React.MouseEvent) => {
    if (onClick) onClick();
    event.stopPropagation();
  };
  return (
    <>
      <S.MenuBox onClick={clickHandler}>
        <S.MenuText color={color}>{text}</S.MenuText>
        <S.MenuIcon src={svg} alt={text} />
      </S.MenuBox>
      <S.LineBox height={line} />
    </>
  );
};

export default Menu;
