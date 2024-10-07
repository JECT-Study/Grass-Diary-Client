import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import { INTERACTION } from '@styles/interaction';

export const WithdrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;

  margin: auto;

  width: 60rem;
  min-height: 82.7vh;

  gap: 1.25rem;
  padding: 3rem 8.5rem 4.5rem 8.5rem;

  border-top: 0 solid ${semantic.light.border.transparent.alternative};
  border-right: 0.0625rem solid ${semantic.light.border.transparent.alternative};
  border-bottom: 0 solid ${semantic.light.border.transparent.alternative};
  border-left: 0.0625rem solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.subtlest};

  @media screen and (max-width: 60em) {
    width: 100%;
    min-width: 20em;

    padding: 1.5rem 1rem 2rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 2.5rem;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 2.5rem;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 0.625rem;
`;

export const GrassLogo = styled.img`
  width: 4.375rem;
  height: 4.375rem;
`;

export const TitleText = styled.span`
  text-align: center;

  ${TYPO.title2}
  color: ${semantic.light.object.solid.hero};
`;

export const WithdrawCautionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 1rem;
`;

export const CautionText = styled.p`
  text-align: center;

  ${TYPO.body2}
  color: ${semantic.light.object.solid.normal};
`;

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.5rem;
`;

export const DescrptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  padding: 1.25rem 1rem 1.25rem 3rem;

  border-radius: 1rem;
  border: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.fill.transparent.assistive};

  box-shadow:
    0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 60em) {
    width: 100%;
  }
`;

export const DescrptionText = styled.li`
  ${TYPO.body2}
  color: ${semantic.light.object.transparent.neutral};
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2.0625rem;
  width: 22.1875rem;
`;

export const AgreeCheckBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: 1.375rem;
`;

export const CheckBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.375rem;
  height: 1.375rem;

  border: 1px solid ${semantic.light.base.solid.lightgray};
`;

export const AgreeText = styled.span`
  ${TYPO.label2}
  color: ${semantic.light.object.solid.hero};
`;

export const WithdrawButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.625rem;
  padding: 0.5rem 1.625rem;

  border-radius: 0.5rem;
  border: 1px solid ${semantic.light.accent.solid.normal};
  background: ${semantic.light.accent.transparent.alternative};

  ${TYPO.label3}
  color: ${semantic.light.accent.solid.hero};
  ${INTERACTION.default.normal()}
`;
