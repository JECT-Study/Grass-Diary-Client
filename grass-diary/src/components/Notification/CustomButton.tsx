import * as S from '@styles/component/Notification/CustomButton.style';
type CustomButtonProps = {
  text?: string;
  onClick?: () => void;
  color?: string;
  interaction?: string;
};

const CustomButton = ({
  onClick,
  text,
  color,
  interaction,
}: CustomButtonProps) => {
  return (
    <S.CustomButton onClick={onClick} $color={color} $interaction={interaction}>
      {text}
    </S.CustomButton>
  );
};

export default CustomButton;
