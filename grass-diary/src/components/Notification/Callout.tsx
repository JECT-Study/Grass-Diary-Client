import useTheme from '@hooks/useTheme';
import * as S from '@styles/component/Notification/Callout.style';
import { ReactComponent as Info } from '@svg/info.svg';

type CalloutProps = {
  message: string;
};

const Callout = ({ message }: CalloutProps) => {
  const { isDarkMode } = useTheme();
  return (
    <S.Container>
      <Info
        fill={isDarkMode ? '#D4D4D4' : '#5E5E5E'}
        style={{ flexShrink: 0 }}
      />
      <S.Text>{message}</S.Text>
    </S.Container>
  );
};

export default Callout;
