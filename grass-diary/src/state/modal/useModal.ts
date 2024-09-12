import { useModalButtonActions } from './ModalButtonStore';
import { useModalActions } from './ModalStore';

type Setting = {
  title: string;
  content: string;
};

type Button2 = {
  active: boolean;
  text: string;
  color?: string;
  interaction?: string;
  clickHandler: () => void;
};

type Button1 = Pick<Button2, 'active' | 'text' | 'color' | 'interaction'>;

export const useModal = () => {
  const { setLogin, setActive, setSetting } = useModalActions();
  const { setResetActive, setButton1, setButton2 } = useModalButtonActions();

  const modal = (setting: Setting, button1?: Button1, button2?: Button2) => {
    setResetActive();
    setSetting(setting);
    if (button1) setButton1(button1);
    if (button2) setButton2(button2);
    setActive(true);
  };

  const loginModal = () => {
    const setting = {
      title: '회원가입 및 로그인',
      content: '',
    };

    setActive(true);
    setLogin(true);
    setSetting(setting);
  };

  return { modal, loginModal };
};
