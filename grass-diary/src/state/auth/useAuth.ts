import { useEffect } from 'react';
import { useAuthActions, useIsAuthenticated, useIsLoding } from './authStore';

interface IUseAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = (): IUseAuthReturn => {
  const isAuthenticated = useIsAuthenticated();
  const isLoading = useIsLoding();
  const { handleCheckAuth } = useAuthActions();

  useEffect(() => {
    handleCheckAuth();
  }, [handleCheckAuth]);

  return { isAuthenticated, isLoading };
};
