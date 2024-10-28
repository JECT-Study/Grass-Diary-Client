import { useEffect } from 'react';
import { useAuthActions, useIsAuthenticated, useIsLoading } from './authStore';

interface IUseAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = (): IUseAuthReturn => {
  const isAuthenticated = useIsAuthenticated();
  const isLoading = useIsLoading();
  const { handleCheckAuth } = useAuthActions();

  useEffect(() => {
    handleCheckAuth();
  }, [handleCheckAuth]);

  return { isAuthenticated, isLoading };
};
