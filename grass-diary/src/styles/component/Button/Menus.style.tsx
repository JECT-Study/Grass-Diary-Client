import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { INTERACTION } from '@styles/interaction';

export const MenusWrapper = styled.div`
  position: relative;
`;

export const MenuButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-md, 1rem);

  border-radius: var(--radius-2xs, 0.25rem);
  ${INTERACTION.default.normal()}
`;

export const MenusNav = styled.nav<{ $toggle: boolean }>`
  display: flex;
  width: 10rem;
  height: ${props => (props.$toggle ? 'auto' : '0rem')};
  flex-direction: column;
  align-items: flex-start;

  border-radius: var(--radius-md, 1rem);
  background: ${semantic.light.bg.solid.normal};

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.06),
    0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.13);

  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(2.6rem);
  overflow: hidden;
  z-index: 998;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
