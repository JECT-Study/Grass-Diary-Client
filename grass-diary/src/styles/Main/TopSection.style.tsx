import styled from 'styled-components';
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
  text-align: center;

  ${TYPO.label3}
  color: ${({ theme }) => theme.object.transparent.neutral};
`;

export const DailyQuestionText = styled.p`
  text-align: center;

  ${TYPO.display1}
  color: ${({ theme }) => theme.object.solid.hero};

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
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  padding: 0.75rem 1rem;

  border: none;
  border-radius: 0.75rem;

  background: ${({ theme }) => theme.accent.solid.normal};
`;

export const CreateDiaryText = styled.p`
  text-align: center;

  ${TYPO.label3}
  color: ${({ theme }) => theme.base.solid.white};
`;

export const MydiaryBtn = styled.button`
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.75rem;
  border: ${({ theme }) =>
    `0.0625rem solid ${theme.border.transparent.alternative}`};

  background: ${({ theme }) => theme.bg.solid.normal};
`;

export const MydiaryTxt = styled.p`
  text-align: center;

  ${TYPO.label3}
  color: ${({ theme }) => theme.object.transparent.alternative};
`;
