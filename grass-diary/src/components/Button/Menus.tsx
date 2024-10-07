import * as S from '@styles/component/Button/Menus.style';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface MenusProps {
  children: ReactNode;
  icon: string;
}

const Menus = ({ children, icon }: MenusProps) => {
  const [open, setOpen] = useState(false);
  const iconRef = useRef<HTMLImageElement>(null);

  const dropDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(current => !current);
  };

  useEffect(() => {
    const closeMenus = (event: MouseEvent) => {
      if (open && iconRef.current) {
        if (!iconRef.current.contains(event.target as HTMLElement)) {
          setOpen(false);
        }
      }
    };

    if (open) {
      document.addEventListener('click', closeMenus);
    }

    return () => document.removeEventListener('click', closeMenus);
  }, [open]);

  return (
    <S.MenusWrapper>
      <S.MenuButton onClick={dropDown}>
        <S.Icon src={icon} ref={iconRef} />
      </S.MenuButton>
      <S.MenusNav $toggle={open}>{children}</S.MenusNav>
    </S.MenusWrapper>
  );
};

export default Menus;
