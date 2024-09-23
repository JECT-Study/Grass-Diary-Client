import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import { INTERACTION } from '@styles/interaction';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(180deg, #fff 0%, #f1f1f1 100%);
`;

export const Container = styled.div`
  margin: auto;
  min-height: 100dvh;
  min-height: 100vh;
  display: flex;
  padding: var(--gap-4xl, 3rem) var(--gap-9xl, 8.5rem) var(--gap-7xl, 4.5rem)
    var(--gap-9xl, 8.5rem);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-lg, 1.25rem);
  align-self: stretch;

  border-top: var(--stroke-empty, 0rem) solid
    ${semantic.light.border.transparent.alternative};
  border-right: var(--stroke-thin, 0.0625rem) solid
    ${semantic.light.border.transparent.alternative};
  border-bottom: var(--stroke-empty, 0rem) solid
    ${semantic.light.border.transparent.alternative};
  border-left: var(--stroke-thin, 0.0625rem) solid
    ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.subtlest};

  width: 60rem;

  @media screen and (max-width: 60em) {
    width: 100%;
    min-width: 20em;
    padding: var(--gap-xl, 1.5rem) var(--gap-md, 1rem) var(--gap-2xl, 2rem)
      var(--gap-md, 1rem);
  }
`;

export const TopSection = styled.section`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-wrap: wrap;
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(2) {
    flex: 1;
    margin-left: 1rem;
    display: flex;
    gap: 1.5rem;
  }

  &:nth-child(3) {
    margin-left: 1.5rem;
  }

  @media screen and (max-width: 60em) {
    &:nth-child(2) {
      order: 3;
      flex-basis: 100%;
      margin-top: 0.75rem;
      margin-left: 0;
    }

    &:nth-child(3) {
      margin-left: auto;
    }
  }
`;

export const Title = styled.h1`
  margin-left: 0.5rem;
  ${TYPO.title1}
  color: ${semantic.light.object.transparent.neutral};
`;

export const WriterBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
  flex: 1;
`;

export const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  object-fit: cover;
`;

export const NicknameText = styled.p`
  ${TYPO.label2}
  color: ${semantic.light.object.solid.normal};
`;

export const TimeText = styled.p`
  ${TYPO.caption3}
  color: ${semantic.light.object.transparent.assistive};
`;

export const PrivateBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4xs, 0.25rem);
`;

export const PrivateText = styled.p`
  ${TYPO.label1}
  color: ${semantic.light.object.transparent.alternative};
`;

export const EmojiBox = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  padding: var(--gap-5xs, 0.125rem);
  border-radius: var(--radius-round, 6rem);
  border: var(--stroke-thin, 0.0625rem) solid
    ${semantic.light.border.transparent.assistive};
  background: ${semantic.light.fill.transparent.assistive};
`;

export const EmojiText = styled.p`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${semantic.light.object.transparent.alternative};
  ${TYPO.title2}
  font-size: 1.25rem !important;
  line-height: 1.375rem !important;
`;

export const DiarySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-xl, 1.5rem);
  align-self: stretch;
`;

export const Image = styled.img`
  height: 28rem;
  width: 100%;
  border-radius: var(--radius-sm, 0.75rem);
  object-fit: cover;
`;

export const ContentBox = styled.div`
  word-break: break-word;
  min-height: 12.5rem;
  align-self: stretch;

  ${TYPO.body2}
  color: ${semantic.light.object.solid.normal};
`;

export const BottomSection = styled.section`
  display: flex;
  align-items: center;
  align-content: center;
  gap: var(--gap-sm, 0.75rem) var(--gap-md, 1rem);
  align-self: stretch;
  flex-wrap: wrap;

  @media screen and (max-width: 60em) {
    flex-direction: column;
    align-items: normal;
    align-content: normal;
  }
`;

export const TagList = styled.ul`
  display: flex;
  align-items: center;
  align-content: center;
  gap: var(--gap-2xs, 0.5rem);
  flex: 1 0 0;
  flex-wrap: wrap;
`;

export const TagItem = styled.li`
  display: flex;
  padding: var(--gap-4xs, 0.25rem) var(--gap-xs, 0.625rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-4xs, 0.25rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: var(--stroke-thin, 0.0625rem) solid
    ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.fill.transparent.assistive};
  ${INTERACTION.default.subtle(semantic.light.fill.transparent.assistive)}
`;

export const TagText = styled.p`
  ${TYPO.caption1}
  color: ${semantic.light.object.transparent.alternative};
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.0625rem;

  background: ${semantic.light.border.transparent.alternative};
`;

export const CommentCountText = styled.p`
  ${TYPO.label3}
  align-self: stretch;
  color: ${semantic.light.object.transparent.neutral};
`;
