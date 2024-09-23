import styled, { css, keyframes } from 'styled-components';
import { TYPO } from '@styles/typo';

export const CreateDiaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.bg.solid.subtler};
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  flex: 1 0 0;

  position: relative;

  min-height: 100vh;
  max-width: var(--vw-desktop-min, 60rem);

  gap: var(--gap-lg, 1.25rem);
  padding: var(--gap-xl, 1.5rem) var(--gap-9xl, 8.5rem) var(--gap-4xl, 3rem)
    var(--gap-9xl, 8.5rem);

  border-top: ${({ theme }) => `var(--stroke-empty, 0px) solid
    ${theme.border.transparent.alternative}`};
  border-right: ${({ theme }) => `var(--stroke-thin, 1px) solid
    ${theme.border.transparent.alternative}`};
  border-bottom: ${({ theme }) => `var(--stroke-empty, 0px) solid
    ${theme.border.transparent.alternative}`};
  border-left: ${({ theme }) => `var(--stroke-thin, 1px) solid
    ${theme.border.transparent.alternative}`};

  background: ${({ theme }) => theme.bg.solid.subtlest};

  @media screen and (max-width: 60em) {
    display: grid;
    justify-content: center;
    padding: var(--gap-lg, 1.25rem) var(--gap-md, 1rem);
  }
`;

export const SaveWrap = styled.div`
  display: flex;

  align-items: center;
  gap: var(--gap-xl, 1.5rem);
  align-self: stretch;

  @media screen and (max-width: 60em) {
    width: 20em;
    gap: 1.5em;
  }
`;

export const SaveWrapContainer = styled.div`
  display: flex;

  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
`;

export const SaveWrapText = styled.p`
  ${TYPO.title1};
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const SaveWrapTime = styled.p`
  flex: 1 0 0;

  ${TYPO.label1}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;

export const SaveBtnContainer = styled.div`
  display: flex;

  align-items: center;
  gap: var(--gap-md, 1rem);

  @media screen and (max-width: 60em) {
    position: absolute;
    bottom: 0;
    padding: var(--gap-lg, 1rem) var(--gap-md, 2rem);
  }
`;

export const SavePrevBtn = styled.button<{ disabled: boolean }>`
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: ${({ theme }) =>
    `var(--stroke-thin, 1px) solid ${theme.border.transparent.alternative}`};

  background: ${({ theme }) => theme.bg.solid.normal};

  &:hover {
    background: ${({ disabled }) =>
      disabled
        ? ({ theme }) => theme.bg.solid.normal
        : ({ theme }) => theme.bg.solid.subtlest};
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  transition: all 0.2s ease-in;
`;

export const SavePrevBtnText = styled.p`
  text-align: center;

  ${TYPO.label2}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;

export const SaveBtn = styled.button<{ disabled: boolean }>`
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  background: ${({ disabled, theme }) =>
    disabled ? theme.interactive.solid.disabled : theme.accent.solid.normal};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ disabled, theme }) =>
      disabled ? theme.interactive.solid.disabled : theme.accent.solid.hero};
  }

  transition: all 0.2s ease-in;
`;

export const SaveBtnText = styled.p<{ disabled: boolean }>`
  color: ${({ disabled, theme }) =>
    disabled ? theme.object.transparent.disabled : theme.base.solid.white};

  text-align: center;
  ${TYPO.label2}
`;

export const DiaryModeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;

  @media screen and (max-width: 60em) {
    width: 20em;
    display: flex;
    flex-direction: column;
  }
`;

export const ModeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-4xs, 0.25rem);
  flex: 1 0 0;
`;

export const DiaryModeSelectorText = styled.p`
  align-self: stretch;

  ${TYPO.label2}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const DiaryModeSelectorSubText = styled.p`
  align-self: stretch;

  ${TYPO.caption1}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;

export const DailyQuestionBox = styled.div<{ $isSelected: boolean }>`
  display: flex;
  padding: var(--gap-md, 1rem) var(--gap-lg, 1.25rem);
  align-items: center;
  gap: var(--gap-lg, 1.25rem);
  flex: 1 0 0;
  border-radius: var(--radius-sm, 0.75rem);
  border: var(--stroke-thin, 1px) solid
    ${props =>
      props.$isSelected
        ? props.theme.accent.solid.hero
        : props.theme.border.transparent.alternative};
  background: ${props =>
    props.$isSelected
      ? props.theme.accent.transparent.alternative
      : ({ theme }) => theme.bg.solid.normal};

  cursor: pointer;
`;

export const CustomEntryBox = styled.div<{ $isSelected: boolean }>`
  display: flex;
  padding: var(--gap-md, 1rem) var(--gap-lg, 1.25rem);
  align-items: center;
  gap: var(--gap-lg, 1.25rem);
  flex: 1 0 0;

  border-radius: var(--radius-sm, 0.75rem);
  border: var(--stroke-thin, 1px) solid
    ${props =>
      props.$isSelected
        ? props.theme.accent.solid.hero
        : props.theme.border.transparent.alternative};

  background: ${props =>
    props.$isSelected
      ? props.theme.accent.transparent.alternative
      : ({ theme }) => theme.bg.solid.normal};

  cursor: pointer;
`;

export const ModeBtn = styled.div`
  [type='radio'] {
    display: none;
  }

  label {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-lg, 1.5rem);
    border: ${({ theme }) => `var(--stroke-thick, 0.125rem) solid
      ${theme.border.transparent.normal}`};
    background: ${({ theme }) => theme.fill.transparent.assistive};
    cursor: pointer;
    transition:
      border 0.2s ease-in-out,
      border-color 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 0 0 0.1rem lightgray;
    }
  }

  [type='radio']:checked + label {
    background: ${({ theme }) => theme.accent.transparent.hero};
    border: ${({ theme }) =>
      `var(--stroke-thicker, 0.25rem) solid ${theme.accent.solid.hero}`};
  }
`;

export const Divider = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  @media screen and (max-width: 60em) {
    width: 20em;
    gap: 1.5em;
  }
`;

export const DividerLine = styled.span`
  width: 43rem;
  height: 0.0625rem;

  background: ${({ theme }) => theme.border.transparent.alternative};
`;

export const ImageLayout = styled.div`
  display: flex;
  padding: var(--gap-empty, 0rem) var(--gap-4xs, 0.25rem);
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
`;

export const Image = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export const ImageName = styled.p`
  ${TYPO.caption1}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const ImageData = styled.p`
  ${TYPO.caption1}
  color: ${({ theme }) => theme.object.transparent.assistive};
`;

export const ImageDelete = styled.div`
  display: flex;
  padding: var(--gap-4xs, 0.25rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-md, 1rem);

  border-radius: var(--radius-2xs, 0.25rem);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-md, 1rem);
  flex: 1 0 0;
  align-self: stretch;

  @media screen and (max-width: 60em) {
    width: 20em;
    gap: 1.5em;
  }
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);
  align-self: stretch;

  @media screen and (max-width: 60em) {
    width: 20em;
    gap: 1.5em;
  }
`;

export const HashtagTitleBox = styled.div`
  display: flex;
  padding: var(--gap-empty, 0rem) var(--gap-4xs, 0.25rem);
  align-items: flex-start;
  align-self: stretch;
`;

export const HashtagTitle = styled.p`
  ${TYPO.label1}
  color: ${({ theme }) => theme.object.transparent.alternative};

  @media screen and (max-width: 60em) {
    padding-top: 1.8em;
  }
`;

export const HashtagBox = styled.div`
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  align-items: center;
  gap: var(--gap-sm, 0.75rem);
  align-self: stretch;

  border-radius: var(--radius-xs, 0.5rem);
  border: ${({ theme }) =>
    `var(--stroke-thin, 1px) solid ${theme.border.transparent.alternative}`};
  background: ${({ theme }) => theme.bg.solid.normal};
`;

export const HashtagContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-sm, 0.75rem);
  flex: 1 0 0;
`;

export const HashtagInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  ${TYPO.body1}

  &::placeholder {
    color: ${({ theme }) => theme.object.transparent.assistive};
  }
`;

export const HashtagArrTitle = styled.p`
  color: ${({ theme }) => theme.accent.solid.hero};

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem;
`;

export const CaptionBox = styled.div`
  display: flex;
  padding: var(--gap-empty, 0rem) var(--gap-md, 1rem);
  align-items: flex-start;
  align-self: stretch;
`;

export const CaptionTextShake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const CaptionText = styled.p<{ color: string }>`
  color: ${props => props.color};
  ${TYPO.caption1}

  ${props =>
    props.color === props.theme.feedback.solid.negative &&
    css`
      animation: ${CaptionTextShake} 0.3s ease;
    `}
`;

export const SelectableContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;

  @media screen and (max-width: 60em) {
    width: 20em;
    gap: 1.5em;

    display: flex;
    flex-direction: column;
    padding-bottom: 3.5em;
  }
`;

export const SelectablePublicBox = styled.div`
  display: flex;
  padding: var(--gap-sm, 0.75rem) var(--gap-md, 1rem);
  align-items: center;
  gap: var(--gap-lg, 1.25rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: ${({ theme }) =>
    `var(--stroke-thin, 1px) solid ${theme.border.transparent.alternative}`};

  background: ${({ theme }) => theme.bg.solid.normal};
`;

export const SelectablePublicText = styled.p`
  ${TYPO.label1}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const SelectableSection = styled.div`
  display: flex;
  padding: var(--gap-3xs, 0.375rem) var(--gap-empty, 0rem);
  align-items: center;
  gap: var(--gap-lg, 1.25rem);
`;

export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
`;

export const RadioBtn = styled.div`
  [type='radio'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: var(--radius-lg, 1.5rem);
    border: ${({ theme }) => `var(--stroke-thick, 0.125rem) solid
      ${theme.border.transparent.normal}`};
    background: ${({ theme }) => theme.fill.transparent.assistive};

    cursor: pointer;
    transition:
      border 0.2s ease-in-out,
      border-color 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 0 0 0.1rem lightgray;
    }
  }

  [type='radio']:checked + label {
    background: ${({ theme }) => theme.accent.transparent.hero};
    border: ${({ theme }) =>
      `var(--stroke-thicker, 0.25rem) solid ${theme.accent.solid.hero}`};
  }
`;

export const RadioText = styled.p`
  ${TYPO.label1}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;

export const EmotionBox = styled.div`
  display: flex;
  padding: var(--gap-sm, 0.75rem) var(--gap-md, 1rem);
  align-items: center;
  gap: var(--gap-lg, 1.25rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: ${({ theme }) =>
    `var(--stroke-thin, 1px) solid ${theme.border.transparent.alternative}`};

  background: ${({ theme }) => theme.bg.solid.normal};

  @media screen and (max-width: 60em) {
    width: 20em;
    gap: 1.5em;
  }
`;

export const EmotionText = styled.p`
  ${TYPO.label1}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const EmojiBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-xs, 0.625rem);
`;

export const EmojiSelectableBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${({ theme }) =>
    `var(--stroke-thin, 0.06rem) solid ${theme.border.transparent.normal}`};
  border-radius: var(--radius-xs, 0.5rem);

  background: ${({ theme }) => theme.fill.transparent.alternative};
`;

export const EmojiInput = styled.input`
  display: none;
`;

export const EmojiLabel = styled.label`
  cursor: pointer;
  font-size: 1.3rem;
  border-radius: var(--radius-xs, 0.5rem);

  transition: all 0.2s ease-in-out;

  ${EmojiInput}:checked + & {
    padding: 0rem 0.2rem 0rem 0.2rem;
    background: ${({ theme }) => theme.accent.transparent.hero};
    border: ${({ theme }) =>
      `var(--stroke-thicker, 0.1rem) solid ${theme.accent.solid.hero}`};
  }
`;
