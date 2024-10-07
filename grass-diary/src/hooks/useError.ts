import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useError = () => {
  const navigate = useNavigate();

  const renderErrorPage = (error: AxiosError<ApiErrorResponse>) => {
    const message = error.response?.data.description;
    navigate('/errorpage', { state: message });
  };

  return { renderErrorPage };
};
