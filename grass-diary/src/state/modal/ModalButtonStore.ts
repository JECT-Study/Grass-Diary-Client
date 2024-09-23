import { create } from 'zustand';

type Actions = {
  setButton1: ({
    active,
    text,
    color,
    interaction,
    clickHandler,
  }: Button1) => void;
  setButton2: ({
    active,
    text,
    color,
    interaction,
    clickHandler,
  }: Button2) => void;
  setResetActive: () => void;
};

interface ModalButtonState {
  button1: Button1;
  button2: Button2;
  actions: Actions;
}

const useModalButtonStore = create<ModalButtonState>(set => ({
  button1: {
    active: false,
    text: '',
    color: '',
    interaction: '',
    clickHandler: () => console.log('button1 default'),
  },
  button2: {
    active: false,
    text: '',
    color: '',
    interaction: '',
    clickHandler: () => console.log('button2 default'),
  },
  actions: {
    setResetActive: () =>
      set(state => ({
        button1: { ...state.button1, active: false },
        button2: { ...state.button2, active: false },
      })),
    setButton1: ({ active, text, color, interaction, clickHandler }) =>
      set(state => ({
        button1: {
          ...state.button1,
          active,
          text,
          color,
          interaction,
          clickHandler,
        },
      })),
    setButton2: ({ active, text, color, interaction, clickHandler }) =>
      set(state => ({
        button2: {
          ...state.button2,
          active,
          text,
          color,
          interaction,
          clickHandler,
        },
      })),
  },
}));
export const useModalButton1 = () =>
  useModalButtonStore(state => state.button1);
export const useModalButton2 = () =>
  useModalButtonStore(state => state.button2);
export const useModalButtonActions = () =>
  useModalButtonStore(state => state.actions);
