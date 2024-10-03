import { MainContainer } from './myComponents';
import * as S from '../../styles/MyPage/MyStyles';
import useTheme from '@hooks/useTheme';

const MyPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <S.SettingContainer isDarkMode={isDarkMode}>
      <MainContainer />
    </S.SettingContainer>
  );
};

export default MyPage;
