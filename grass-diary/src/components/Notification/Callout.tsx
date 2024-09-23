import * as S from '@styles/component/Notification/Callout.style';
import { ReactComponent as Info } from '@svg/info.svg';

type CalloutProps = {
  message: string;
};

const Callout = ({ message }: CalloutProps) => {
  return (
    <S.Container>
      <Info style={{ flexShrink: 0 }} />
      <S.Text>{message}</S.Text>
    </S.Container>
  );
};

export default Callout;
