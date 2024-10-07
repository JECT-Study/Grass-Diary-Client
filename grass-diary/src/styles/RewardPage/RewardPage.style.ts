import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';

export const Background = styled.div`
  background: ${semantic.light.bg.solid.subtlest};
`;

export const Layout = styled.div`
  display: flex;
  margin: auto;
  max-width: var(--vw-desktop-min, 60rem);
  min-height: 100vh;
  padding: var(--gap-7xl, 4.5rem) var(--gap-xl, 1.5rem);
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  border-top: var(--stroke-empty, 0px) solid
    ${semantic.light.border.transparent.alternative};
  border-right: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  border-bottom: var(--stroke-empty, 0px) solid
    ${semantic.light.border.transparent.alternative};
  border-left: var(--stroke-thin, 1px) solid
    ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.normal};
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: var(--gap-2xl, 2rem) var(--gap-empty, 0rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
`;

export const RewardTitle = styled.p`
  color: ${semantic.light.object.solid.hero};
  text-align: center;

  ${TYPO.display1}
`;

export const RewardSubTitle = styled.p`
  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}
`;

export const RewardSection = styled.section`
  display: flex;
  padding: var(--gap-xl, 1.5rem) var(--gap-empty, 0rem);
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;

  @media screen and (max-width: 60em) {
    display: flex;
    flex-direction: column;
  }
`;

export const RewardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xl, 2rem);
  flex: 1 0 0;

  @media screen and (max-width: 60em) {
    display: flex;
    flex-direction: column;
    gap: var(--gap-2xl, 1rem);
  }
`;

export const GrassCountBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
`;

export const CountText = styled.p`
  color: ${semantic.light.object.solid.normal};

  ${TYPO.title1}
`;

export const CountCaptionText = styled.p`
  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}
`;

export const GrassRewardBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);
`;

export const TotalRewardText = styled.p`
  color: ${semantic.light.object.solid.normal};

  ${TYPO.title1}
`;

export const TotalRewardCaptionText = styled.p`
  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}
`;

export const ThemeBtn = styled.button`
  display: flex;
  padding: var(--gap-xs, 0.625rem) var(--gap-md, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: var(--stroke-thin, 1px) solid ${semantic.light.accent.solid.normal};
  background: ${semantic.light.accent.transparent.normal};
`;

export const ThemeBtnText = styled.p`
  color: ${semantic.light.accent.solid.hero};
  text-align: center;

  ${TYPO.label2}
`;

export const HistorySection = styled.section`
  display: flex;
  padding: var(--gap-2xl, 2rem) var(--gap-empty, 0rem);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);
  align-self: stretch;
`;

export const DayBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xl, 2rem);
  align-self: stretch;
`;

export const DayTextBox = styled.div`
  display: flex;
  min-width: 7.5rem;
  justify-content: center;
  align-items: center;
`;

export const DayText = styled.p`
  flex: 1 0 0;

  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}
`;

export const GetRewardText = styled.p`
  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}
`;

export const DividerBox = styled.div`
  display: flex;
  height: 0.0625rem;
  padding-top: 0.0625rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const Divider = styled.span`
  width: 57rem;
  height: 0.0625rem;

  background: ${semantic.light.border.transparent.alternative};
`;

export const HistoryYearMonthTextBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const HistoryYearMonthText = styled.p`
  color: ${semantic.light.object.solid.normal};

  ${TYPO.title1}
`;

export const RewardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);
  align-self: stretch;
`;

export const RewardListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-2xs, 1.2rem);
  align-self: stretch;
`;

export const RewardList = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xl, 2rem);
  align-self: stretch;
`;

export const RewardDate = styled.div`
  display: flex;
  min-width: 7.5rem;
  align-items: center;
`;

export const RewardDateText = styled.p`
  color: ${semantic.light.object.transparent.neutral};

  ${TYPO.label2}
`;

export const RewardPoint = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2xs, 1rem);
`;

export const RewardPointText = styled.p`
  color: ${semantic.light.object.transparent.neutral};

  display: flex;
  justify-content: center;
  align-items: center;

  ${TYPO.label2}
`;
