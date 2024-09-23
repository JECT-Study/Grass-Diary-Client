import * as S from '@styles/Intro/IntroStyles';
import {
  FirstSection,
  LastSection,
  SecondSection,
  ThirdSection,
} from './introComponents';

const Intro = () => {
  return (
    <S.IntroContainer>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </S.IntroContainer>
  );
};

export default Intro;
