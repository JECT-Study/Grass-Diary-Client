import { create } from 'zustand';

type Actions = {
  setLogin: (login: boolean) => void;
  setActive: (active: boolean) => void;
  setSetting: ({ title, content }: Setting) => void;
};
type ModalState = {
  login: boolean;
  active: boolean;
  setting: Setting;
  actions: Actions;
};
const useModalStore = create<ModalState>(set => ({
  login: false,
  active: false,
  setting: {
    title: '',
    content: '',
  },
  actions: {
    setLogin: login => set({ login }),
    setActive: active => set({ active }),
    setSetting: setting => set({ setting }),
  },
}));
export const useModalLogin = () => useModalStore(state => state.login);
export const useModalActive = () => useModalStore(state => state.active);
export const useModalSetting = () => useModalStore(state => state.setting);
export const useModalActions = () => useModalStore(state => state.actions);
