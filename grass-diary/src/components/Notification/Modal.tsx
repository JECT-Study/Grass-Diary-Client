import * as S from '@styles/component/Notification/Modal.style';
import CustomButton from '../Notification/CustomButton';
import {
  useModalActions,
  useModalActive,
  useModalLogin,
  useModalSetting,
} from '@state/modal/ModalStore';
import {
  useModalButton1,
  useModalButton2,
} from '@state/modal/ModalButtonStore';
import { API_URI } from '@services/index';
import { FOOTER } from '@constants/message';

const Modal = () => {
  const login = useModalLogin();
  const setting = useModalSetting();
  const active = useModalActive();
  const button1 = useModalButton1();
  const button2 = useModalButton2();
  const { setLogin, setActive } = useModalActions();

  const handleGoogleLogin: TGoogleLogin = () => {
    window.open(`${API_URI}/api/auth/google`, '_self');
  };

  return (
    <S.ModalBox $active={active}>
      <S.Container>
        <S.TopBox>
          <S.Title>{setting.title}</S.Title>
          <S.CloseIcon
            width={20}
            height={20}
            onClick={() => {
              setActive(false);
              setLogin(false);
            }}
          />
        </S.TopBox>
        {setting.content !== '' && (
          <S.ContentText>{setting.content}</S.ContentText>
        )}
        <S.Divider />
        {login ? (
          <S.LoginBox>
            <button
              onClick={() => {
                setLogin(false);
                setActive(false);
                handleGoogleLogin();
              }}
            >
              <img src="/assets/img/googleLogin.png" />
            </button>
            <S.TermText>
              로그인 시,{' '}
              <S.TermAnchor
                href={FOOTER.terms_of_use_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                서비스 이용약관
              </S.TermAnchor>
              에 동의하는 것으로 간주됩니다.
            </S.TermText>
          </S.LoginBox>
        ) : (
          <S.BottomBox>
            {button1.active && (
              <CustomButton
                text={button1.text}
                onClick={() => {
                  setActive(false);
                  if (button1.clickHandler) button1.clickHandler();
                }}
                color={button1.color}
                interaction={button1.interaction}
              />
            )}
            {button2.active && (
              <CustomButton
                text={button2.text}
                onClick={() => {
                  setActive(false);
                  if (button2.clickHandler) button2.clickHandler();
                }}
                color={button2.color}
                interaction={button2.interaction}
              />
            )}
          </S.BottomBox>
        )}
      </S.Container>
    </S.ModalBox>
  );
};

export default Modal;
