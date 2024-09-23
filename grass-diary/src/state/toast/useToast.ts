import { useToastActions } from './ToastStore';

export const useToast = () => {
  const { setActive, setText, setIsRed } = useToastActions();

  const timer = () => {
    setTimeout(() => {
      setActive();
    }, 5000);
  };

  const toast = (text: string) => {
    setText(text);
    setActive();
    setIsRed(false);
    timer();
  };

  const redToast = (text: string) => {
    setText(text);
    setActive();
    setIsRed(true);
    timer();
  };

  return { toast, redToast };
};
