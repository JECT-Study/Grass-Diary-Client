import { MainContainer } from './myComponents';
import * as S from '../../styles/MyPage/MyStyles';
import { ThemeProvider } from 'styled-components';
import { semantic } from '@styles/semantic';
import useTheme from '@hooks/useTheme';

const MyPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? semantic.dark : semantic.light}>
      <S.SettingContainer isDarkMode={isDarkMode}>
        <MainContainer />
      </S.SettingContainer>
    </ThemeProvider>
  );
};

export default MyPage;
