import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';

export const Container = styled.div`
  display: flex;
  max-width: 60rem;
  padding: 4.5rem 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 60em) {
    width: 22rem;
  }
`;

export const TodayDateBox = styled.div`
  color: ${semantic.light.object.transparent.neutral};
  text-align: center;

  ${TYPO.label3}
`;

export const DailyQuestionText = styled.p`
  color: ${semantic.light.object.solid.hero};
  text-align: center;

  ${TYPO.display1}

  @media screen and (max-width: 60em) {
    ${TYPO.title3}
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const CreateDiaryBtn = styled.button`
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.75rem;

  background: ${semantic.light.accent.solid.normal};
  border: none;
`;

export const CreateDiaryText = styled.p`
  color: ${semantic.light.base.solid.white};
  text-align: center;

  ${TYPO.label3}
`;

export const MydiaryBtn = styled.button`
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.75rem;
  border: 0.0625rem solid ${semantic.light.border.transparent.alternative};

  background: ${semantic.light.bg.solid.normal};
`;

export const MydiaryTxt = styled.p`
  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.label3}
`;
