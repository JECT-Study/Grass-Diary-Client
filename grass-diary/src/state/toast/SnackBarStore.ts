import { create } from 'zustand';

type Actions = {
  setReset: () => void;
  setActive: (active: boolean) => void;
  setText: (text: string) => void;
  setHighlight: (highlight: string) => void;
  setLinkText: (linkText: string) => void;
  setPage: (page: string) => void;
};

interface SnackBarState {
  active: boolean;
  text: string;
  highlight: string;
  linkText: string;
  page: string;
  actions: Actions;
}

const useSnackBarStore = create<SnackBarState>(set => ({
  active: false,
  text: '',
  highlight: '',
  linkText: '',
  page: '',
  actions: {
    setReset: () =>
      set({ active: false, text: '', highlight: '', linkText: '', page: '' }),
    setActive: active => set({ active }),
    setText: text => set({ text }),
    setHighlight: highlight => set({ highlight }),
    setLinkText: linkText => set({ linkText }),
    setPage: page => set({ page }),
  },
}));

export const useSnackBarText = () => useSnackBarStore(state => state.text);
export const useSnackBarActive = () => useSnackBarStore(state => state.active);
export const useSnackBarHighlight = () =>
  useSnackBarStore(state => state.highlight);
export const useSnackBarLinkText = () =>
  useSnackBarStore(state => state.linkText);
export const useSnackBarPage = () => useSnackBarStore(state => state.page);
export const useSnackBarActions = () =>
  useSnackBarStore(state => state.actions);
