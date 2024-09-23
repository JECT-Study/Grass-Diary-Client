import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';

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
`;

export const NameText = styled.p`
  ${TYPO.label2}
  color: ${semantic.light.object.solid.normal};
`;

export const InputContainer = styled.div<{
  $focus: boolean;
  $isReply: boolean;
}>`
  display: flex;
  padding: var(--gap-sm, 0.75rem) var(--gap-md, 1rem);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-md, 1rem);
  align-self: stretch;

  border-radius: var(--radius-sm, 0.75rem);
  border: var(--stroke-thin, 0.0625rem) solid
    ${props =>
      props.$focus
        ? semantic.light.accent.solid.hero
        : semantic.light.border.transparent.normal};
  ${props =>
    props.$isReply &&
    `box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.06), 0px 3px 6px 0px rgba(0, 0, 0, 0.11);`}
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
  align-items: flex-end;
`;

export const Input = styled.textarea`
  resize: none;
  background: inherit;
  height: auto;

  &:focus {
    outline: none;
  }

  display: flex;
  padding: var(--gap-empty, 0rem) var(--gap-4xs, 0.25rem);
  align-items: center;
  flex: 1 0 0;

  border: none;
  ${TYPO.body1}
  caret-color: ${semantic.light.accent.solid.normal};

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${semantic.light.object.transparent.assistive};
  }
  &:-ms-input-placeholder {
    color: ${semantic.light.object.transparent.assistive};
  }
`;

export const CancelButton = styled.button`
  cursor: pointer;
  padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);
  gap: var(--gap-2xs, 0.5rem);
  text-align: center;

  ${TYPO.label1}
  color: ${semantic.light.object.transparent.alternative};
`;

export const SubmitButton = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
  text-align: center;

  ${TYPO.label1}
  color: ${semantic.light.accent.solid.normal};

  &:disabled {
    color: ${semantic.light.object.transparent.disabled};
  }
`;
