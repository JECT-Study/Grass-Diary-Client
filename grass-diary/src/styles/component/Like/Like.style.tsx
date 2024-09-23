import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import { ReactComponent as LikeBorder } from '@svg/favorite_border.svg';
import { ReactComponent as LikeIcon } from '@svg/favorite.svg';
import { INTERACTION } from '@styles/interaction';

export const LikeContainer = styled.button<{ $isPushed: boolean }>`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  gap: var(--gap-2xs, 0.5rem);
  border-radius: var(--radius-xs, 0.5rem);

  border: var(--stroke-thin, 0.0625rem) solid
    ${props =>
      props.$isPushed
        ? semantic.light.accent.solid.normal
        : semantic.light.border.transparent.alternative};

  background: ${props =>
    props.$isPushed
      ? semantic.light.accent.transparent.normal
      : semantic.light.bg.solid.normal};

  color: ${props =>
    props.$isPushed
      ? semantic.light.accent.solid.hero
      : semantic.light.object.transparent.alternative};

  ${props =>
    props.$isPushed
      ? INTERACTION.default.normal(semantic.light.accent.transparent.normal)
      : INTERACTION.default.normal(semantic.light.bg.solid.normal)}
`;

export const CountText = styled.p`
  text-align: center;
  ${TYPO.label2}
`;

export const YES = styled(LikeIcon)`
  cursor: pointer;
  fill: ${semantic.light.accent.solid.hero};
`;

export const No = styled(LikeBorder)`
  cursor: pointer;
`;
