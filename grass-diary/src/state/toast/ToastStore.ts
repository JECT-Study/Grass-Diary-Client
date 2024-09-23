import { create } from 'zustand';

type Actions = {
  setText: (text: string) => void;
  setActive: () => void;
  setIsRed: (isRed: boolean) => void;
};

interface ToastState {
  text: string;
  active: boolean;
  isRed: boolean;
  actions: Actions;
}

const useToastStore = create<ToastState>(set => ({
  text: 'test',
  active: false,
  isRed: false,
  actions: {
    setText: text => set({ text }),
    setActive: () => set(state => ({ active: !state.active })),
    setIsRed: isRed => set({ isRed }),
  },
}));

export const useToastText = () => useToastStore(state => state.text);
export const useToastActive = () => useToastStore(state => state.active);
export const useToastIsRed = () => useToastStore(state => state.isRed);
export const useToastActions = () => useToastStore(state => state.actions);
