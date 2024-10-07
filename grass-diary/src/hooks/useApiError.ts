import { useToast } from '@state/toast/useToast';
import axios from 'axios';
import { useCallback } from 'react';

const useApiError = () => {
  const { toast } = useToast();
  const handleError = useCallback((error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorMessage = error.response.data.description;
        console.error(error);
        toast(errorMessage);
      }
    }
  }, []);
  return { handleError };
};

export default useApiError;
