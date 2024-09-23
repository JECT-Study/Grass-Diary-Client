import styled from 'styled-components';
import { TYPO } from '@styles/typo';

export const Article = styled.article`
  display: flex;
  justify-content: center;
`;

export const Container = styled.li<{ $isTop: boolean }>`
  display: flex;
  padding: var(--gap-md, 1.25rem);
  flex-direction: column;
  align-items: flex-end;
  gap: var(--gap-xl, 1.5rem);

  width: ${props => (props.$isTop ? `17.7` : `27.75`)}rem;
  height: ${props => (props.$isTop ? `28.75` : 'auto')}rem;
  max-height: 39.25rem;
  margin-bottom: 1rem;

  border-radius: var(--radius-md, 1rem);
  border: ${({ theme }) => `var(--stroke-thin, 0.0625rem) solid
    ${theme.border.transparent.assistive}`};
  background: ${({ theme }) => theme.bg.solid.normal};
  box-shadow:
    0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 60em) {
    padding: var(--gap-md, 1rem);
    width: 20rem;
  }
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-sm, 0.75rem);
  align-self: stretch;
`;

export const UserImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: var(--radius-empty, 2.5rem);
  background: ${({ theme }) => theme.fill.transparent.alternative};
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--gap-4xs, 0.25rem);
  flex: 1 0 0;
`;

export const TimeText = styled.p`
  ${TYPO.caption1}
  color: ${({ theme }) => theme.object.transparent.assistive};
`;

export const DateText = styled.div`
  ${TYPO.label1}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  ${TYPO.label1}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const EmojiBox = styled.div`
  display: flex;
  padding: var(--gap-5xs, 0.125rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: var(--radius-round, 6rem);
  border: ${({ theme }) => `var(--stroke-thin, 0.0625rem) solid
    ${theme.border.transparent.assistive}`};

  background: ${({ theme }) => theme.fill.transparent.assistive};
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--gap-md, 1rem);
  width: 100%;
`;

export const ContentText = styled.div<{ $isTop: boolean; $hasImage: boolean }>`
  ${props =>
    props.$hasImage &&
    `display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  `}

  align-self: stretch;
  word-break: break-all;
  overflow: hidden;

  ${TYPO.body2}
  color: ${({ theme }) => theme.object.solid.normal};
`;

export const Image = styled.img<{ $isTop: boolean }>`
  width: 100%;
  height: ${props => (props.$isTop ? `12.5rem` : `22.5rem`)};

  border-radius: var(--radius-sm, 0.75rem);
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const ContentBox = styled.div`
  flex: 1;
  align-self: stretch;
  cursor: pointer;
`;

export const IconBox = styled.div`
  display: flex;
  padding: var(--gap-5xs, 0.125rem) var(--gap-empty, 0rem);
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  ${TYPO.label3}
  color: ${({ theme }) => theme.object.transparent.assistive};
`;
