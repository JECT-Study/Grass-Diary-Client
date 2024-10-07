import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import { INTERACTION } from '@styles/interaction';

export const MenuBox = styled.div`
  cursor: pointer;
  width: 10rem;
  display: flex;
  padding: var(--gap-md, 1rem) var(--gap-lg, 1.25rem);
  align-items: center;
  gap: var(--gap-md, 1rem);
  ${INTERACTION.default.normal()}
`;

export const MenuText = styled.p<{ color?: string }>`
  ${TYPO.label2};
  flex: 1 0 0;
  color: ${props => props.color || semantic.light.object.solid.normal};
  text-align: left;
`;

export const MenuIcon = styled.img`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 1.125rem;
  height: 1.125rem;
`;

export const LineBox = styled.div<{ height: number | undefined }>`
  height: ${props => props.height || 0.0625}rem;
  align-self: stretch;
  background: ${semantic.light.border.transparent.assistive};
`;
