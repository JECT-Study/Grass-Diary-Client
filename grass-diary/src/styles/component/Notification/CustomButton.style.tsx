import { INTERACTION } from '@styles/interaction';
import { semantic } from '@styles/semantic';
import styled from 'styled-components';

export const CustomButton = styled.button<{
  $color?: string;
  $interaction?: string;
}>`
  cursor: pointer;
  align-self: stretch;
  display: flex;
  height: 3rem;
  padding: var(--gap-sm, 0.75rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
  flex: 1 0 0;

  border-radius: var(--radius-sm, 0.75rem);
  color: ${props =>
    props.$color || semantic.light.object.transparent.alternative};

  ${props => props.$interaction || INTERACTION.default.normal()}
`;
