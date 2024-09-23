import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';

export const CommentItem = styled.li<{ $isMe: boolean }>`
  display: flex;
  padding: var(--gap-sm, 0.75rem) var(--gap-md, 1rem);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-sm, 0.75rem);
  align-self: stretch;

  border-radius: var(--radius-sm, 0.75rem);
  border: ${props =>
    props.$isMe
      ? 'none'
      : `var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.assistive}`};

  background: ${props =>
    props.$isMe ? semantic.light.fill.transparent.assistive : 'none'};
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
`;

export const WriterBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
  flex: 1 0 0;
`;

export const ProfileImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: var(--radius-empty, 1.5rem);
  object-fit: cover;
  background: ${semantic.light.fill.transparent.alternative};
`;

export const NameText = styled.p<{ $isMe: boolean }>`
  ${TYPO.label2}
  color: ${props =>
    props.$isMe
      ? semantic.light.accent.solid.hero
      : semantic.light.object.solid.normal};
`;

export const TimeText = styled.p`
  ${TYPO.caption1}
  color: ${semantic.light.object.transparent.assistive};
`;

export const ContentBox = styled.div<{
  $isReply?: boolean;
}>`
  ${TYPO.body1}
  ${props => props.$isReply && `padding-left: var(--gap-2xl, 2rem);`}
  color: ${semantic.light.object.solid.normal};
  white-space: pre;
`;

export const DeletedText = styled.p`
  ${TYPO.body1}
  color: ${semantic.light.object.transparent.alternative};
`;
