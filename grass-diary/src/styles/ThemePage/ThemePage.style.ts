import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import styled, { css, keyframes } from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-xl, 1.5rem);
  align-self: stretch;

  @media screen and (max-width: 60em) {
    display: flex;
    width: 23.4375rem;
    min-width: var(--vw-mobile-min, 20rem);
    max-width: var(--vw-mobile-max, 59.9375rem);
    flex-direction: column;
    align-items: center;
    gap: var(--gap-md, 1rem);
  }
`;

export const ThemeTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--gap-5xl, 3.5rem);
  padding-top: 3.5rem;
  padding-left: 48rem;

  @media screen and (max-width: 60em) {
    display: flex;
    height: 12rem;
    padding: var(--gap-2xl, 2rem) var(--gap-lg, 1.25rem) var(--gap-5xl, 3.5rem)
      var(--gap-lg, 1.25rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ThemeStoreBtn = styled.button`
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: flex-end;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: var(--stroke-thin, 1px) solid ${semantic.light.accent.solid.normal};
  background: ${semantic.light.accent.transparent.normal};
`;

export const ThemeStoreBtnText = styled.p`
  color: ${semantic.light.accent.solid.hero};
  text-align: center;

  ${TYPO.label2}
`;

export const ThemeTitle = styled.p`
  align-self: stretch;

  color: ${semantic.light.object.solid.hero};
  text-align: center;

  ${TYPO.display1}
`;

export const ThemeSubTitleBox = styled.div`
  display: flex;
  width: 22.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
`;

export const ThemeSubTitle = styled.p`
  align-self: stretch;

  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.body3}

  @media screen and (max-width: 60em) {
    align-self: stretch;

    color: ${semantic.light.object.transparent.alternative};
    text-align: center;

    ${TYPO.title1}
  }
`;

export const RewardPageBtn = styled.button`
  display: flex;
  padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
`;

export const RewardBtnText = styled.p`
  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.label1}
`;

export const RewardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-sm, 0.75rem);
  align-self: stretch;
`;

export const ThemePreviewContainer = styled.div`
  display: flex;
  padding-top: var(--gap-6xl, 4rem);
  flex-direction: column;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
`;

export const ThemePreviewTextBox = styled.div`
  display: flex;
  padding: var(--gap-2xs, 0.5rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: flex-end;
  gap: var(--gap-3xs, 0.375rem);

  border-radius: var(--radius-sm, 0.75rem);
  border: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  opacity: var(--opacity-visible, 1);
  background: ${semantic.light.fill.transparent.assistive};
`;

export const ThemePreviewText = styled.p`
  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.label2}
`;

export const ThemePreviewSubText = styled.p`
  color: ${semantic.light.accent.solid.alternative};

  ${TYPO.label2}
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 3.5rem);
  grid-gap: var(--gap-xs, 0.625rem);
  margin-bottom: 0.625rem;

  @media screen and (max-width: 60em) {
    display: grid;
    grid-template-columns: repeat(7, 2em);
    grid-gap: var(--gap-xs, 0.525rem);
    margin-bottom: 0.525rem;
  }
`;

export const Box = styled.div<{ backgroundColor: string }>`
  width: 3.5rem;
  height: 3.5rem;

  border-radius: var(--radius-sm, 0.75rem);

  background: ${props => props.backgroundColor};

  box-shadow: 0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.04),
    0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08);

  transition: 0.3s ease all;

  @media screen and (max-width: 60em) {
    width: 2em;
    height: 2em;

    border-radius: var(--radius-sm, 0.75rem);

    background: ${props => props.backgroundColor};

    box-shadow: 0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.04),
      0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08);
  }
`;

export const ThemeColorContainer = styled.div`
  display: flex;
  width: var(--vw-desktop-min, 60rem);
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 60em) {
    width: 22rem;
    padding-left: 2.5rem;
  }
`;

export const ThemeColorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
`;

export const ThemeColorBox = styled.div`
  display: flex;
  height: 35rem;
  max-width: var(--vw-desktop-min, 60rem);
  padding: var(--gap-empty, 0rem) var(--gap-xl, 1.5rem) var(--gap-xl, 1.5rem)
    var(--gap-empty, 0rem);
  align-items: center;
  align-content: center;
  gap: var(--gap-3xl, 2.5rem) var(--gap-4xl, 3rem);
  align-self: stretch;
  flex-wrap: wrap;
`;

export const ThemeColorTitleContainer = styled.div`
  display: flex;
  width: 58.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);
`;

export const ThemeColorTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ThemeColorTitle = styled.p`
  align-self: stretch;

  color: ${semantic.light.object.transparent.neutral};

  ${TYPO.title1}
`;

export const ThemeColorSubTitle = styled.p`
  align-self: stretch;

  color: ${semantic.light.object.transparent.neutral};

  ${TYPO.caption1}
`;

const bounce = keyframes`
0%, 100% {
  transform:scale(1)
}
50% {
  transform:scale(1.1)
}
`;

export const ThemeColor = styled.div<{
  backgroundColor: string;
  isSelected: boolean;
}>`
  width: 6.5rem;
  height: 6.5rem;

  border: 4px solid ${semantic.light.border.solid.alternative};
  border-radius: var(--radius-sm, 50%);

  background: ${props => props.backgroundColor};

  box-shadow: 0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.04),
    0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08);
  cursor: pointer;

  transition: 0.2s ease all;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    opacity: 70%;
  }

  ${props =>
    props.isSelected &&
    css`
      animation: ${bounce} 1 ease;
      transform: scale(1.2);
    `}

  @media screen and (max-width: 60em) {
    width: 3.5em;
    height: 3.5em;

    border: 4px solid ${semantic.light.border.solid.alternative};
    border-radius: var(--radius-sm, 50%);

    background: ${props => props.backgroundColor};

    box-shadow: 0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.04),
      0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08);

    transition: 0.3s ease all;

    ${props =>
      props.isSelected &&
      css`
        animation: ${bounce} 1 ease;
        transform: scale(1.2);
      `}
  }
`;

export const BuyThemeBox = styled.button`
  display: flex;
  padding-bottom: 5rem;
`;

export const BuyThemeBtn = styled.button`
  display: flex;
  width: 15.25rem;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  background: ${semantic.light.accent.solid.normal};
`;

export const BuyThemeBtnText = styled.p`
  color: ${semantic.light.base.solid.white};
  text-align: center;

  ${TYPO.title1}
`;
