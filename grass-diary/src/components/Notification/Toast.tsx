import * as S from '@styles/component/Notification/Toast.style';
import {
  useToastActive,
  useToastIsRed,
  useToastText,
} from '@state/toast/ToastStore';

const Toast = () => {
  const text = useToastText();
  const active = useToastActive();
  const isRed = useToastIsRed();

  return (
    <S.ToastBox $active={active} $isRed={isRed}>
      {text}
    </S.ToastBox>
  );
};

export default Toast;
