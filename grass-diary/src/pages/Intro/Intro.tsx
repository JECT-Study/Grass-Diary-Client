import { ThemeProvider } from 'styled-components';

import * as S from '@styles/Intro/IntroStyles';
import { semantic } from '@styles/semantic';
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
    <ThemeProvider theme={isDarkMode ? semantic.dark : semantic.light}>
      <S.IntroContainer isDarkMode={isDarkMode}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <LastSection />
      </S.IntroContainer>
    </ThemeProvider>
  );
};

export default Intro;
