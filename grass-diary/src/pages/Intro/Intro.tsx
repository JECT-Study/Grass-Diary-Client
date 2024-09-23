import * as S from '@styles/Intro/IntroStyles';
import useTheme from '@hooks/useTheme';
import {
  FirstSection,
  LastSection,
  SecondSection,
  ThirdSection,
} from './introComponents';

const Intro = () => {
  const { isDarkMode } = useTheme();

  return (
    <S.IntroContainer isDarkMode={isDarkMode}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </S.IntroContainer>
  );
};

export default Intro;
