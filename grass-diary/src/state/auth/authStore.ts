import { CONSOLE_ERROR } from '@constants/message';
import { checkAuth } from '@utils/authUtils';
import { create } from 'zustand';

interface Actions {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setExpDate: (expDate: Date) => void;
  handleCheckAuth: () => Promise<void>;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  expDate: Date | null;
  actions: Actions;
}

const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  isLoading: true,
  expDate: null,
  actions: {
    setIsAuthenticated: isAuthenticated => set({ isAuthenticated }),
    setIsLoading: isLoading => set({ isLoading }),
    setExpDate: expDate => set({ expDate }),
    handleCheckAuth: async () => {
      try {
        const isLoggedIn: boolean = await checkAuth();
        set({ isAuthenticated: isLoggedIn });
        set({ isLoading: false });
      } catch (error) {
        console.error(CONSOLE_ERROR.login.false + error);
        set({ isAuthenticated: false });
        set({ isLoading: false });
      }
    },
  },
}));

export const useIsAuthenticated = () =>
  useAuthStore(state => state.isAuthenticated);
export const useIsLoading = () => useAuthStore(state => state.isLoading);
export const useAuthExpDate = () => useAuthStore(state => state.expDate);
export const useAuthActions = () => useAuthStore(state => state.actions);
