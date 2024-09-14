import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import styled from 'styled-components';

const IntroContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #fff 0%, #ebebeb 100%);
`;

const CommonSection = styled.section`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 56.75rem;

  gap: 2rem;
`;

/** first section */

const MainBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;

  position: absolute;

  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  gap: 1.5rem;
  max-width: 60rem;
`;

const FirstTitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  gap: 1rem;
`;

const LogoImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;

const MainTitle = styled.h2`
  ${TYPO.display2};
  color: ${semantic.light.object.solid.hero};
`;

const MainIntrouctionText = styled.small`
  align-self: stretch;
  text-align: center;

  ${TYPO.title1}
  color: ${semantic.light.object.transparent.alternative};
`;

/** common login button */

const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: column;

  gap: 1.5rem;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 20rem;

  gap: 0.5rem;
  padding: 0.75rem 1rem;

  border-radius: 0.75rem;
  background: ${semantic.light.accent.solid.normal};
`;

const ButtonText = styled.span`
  ${TYPO.label3}
  color: ${semantic.light.base.solid.white};
`;

/** scroll message */

const ScrollMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  bottom: 1.5rem;

  width: 60rem;
  max-width: 60rem;

  gap: 0.5rem;
`;

const ScrollText = styled.small`
  align-self: stretch;

  text-align: center;
  ${TYPO.label2}
  color: ${semantic.light.object.transparent.alternative};
`;

const ScrollImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

/** second section */
const CommonArticle = styled.article`
  display: flex;
  align-items: center;
  align-self: stretch;

  max-width: 60rem;
  gap: 2rem;
`;

const CommonTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;

  width: 29.5rem;

  gap: 1.5rem;
`;

const CommonTitle = styled.h1`
  text-align: center;

  ${TYPO.title3}
  color: ${semantic.light.object.solid.hero};
`;

const CommonIntroductionText = styled.small`
  text-align: center;

  ${TYPO.label3}
  color: ${semantic.light.object.transparent.alternative};
`;

const HighlightText = styled.span`
  text-align: center;

  ${TYPO.title3};
  color: ${semantic.light.accent.solid.normal};
`;

export {
  IntroContainer,
  CommonSection,
  MainBox,
  LogoImg,
  MainTitle,
  FirstTitleContainer,
  MainIntrouctionText,
  LoginButtonContainer,
  LoginButton,
  ButtonText,
  ScrollMessageContainer,
  ScrollText,
  ScrollImg,
  CommonArticle,
  CommonTitleContainer,
  CommonTitle,
  CommonIntroductionText,
  HighlightText,
};
