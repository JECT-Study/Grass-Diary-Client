interface IModalReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

// Login Modal Type
interface ILoginModalProps {
  top: string;
  isOpen: () => void;
  isClose: () => void;
}

type TGoogleLogin = () => void;

// DiaryDetail Modal Type
type ImageModalProps = {
  img: string;
  setImageModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// Modal 전역 state props
type Setting = {
  title: string;
  content: string;
};

type Button = {
  active: boolean;
  text: string;
  color?: string;
  interaction?: string;
};

// Button1은 clickHandler가 선택적
type Button1 = Button & {
  clickHandler?: () => void;
};

// Button2는 clickHandler가 필수
type Button2 = Button & {
  clickHandler: () => void;
};
