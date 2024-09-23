import { CONSOLE_ERROR } from '@constants/message';
import { checkAuth } from '@utils/authUtils';
import { create } from 'zustand';

interface Actions {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  handleCheckAuth: () => Promise<void>;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  actions: Actions;
}

const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  isLoading: true,
  actions: {
    setIsAuthenticated: isAuthenticated => set({ isAuthenticated }),
    setIsLoading: isLoading => set({ isLoading }),
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
export const useIsLoding = () => useAuthStore(state => state.isLoading);
export const useAuthActions = () => useAuthStore(state => state.actions);
