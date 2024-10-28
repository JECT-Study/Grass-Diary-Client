import { jwtDecode } from 'jwt-decode';
import { useAuthActions } from './authStore';

const useExpDate = () => {
  const accessToken = localStorage.getItem('accessToken');
  const { setExpDate } = useAuthActions();

  const handleExpDate = () => {
    if (accessToken) {
      try {
        const decode = jwtDecode(accessToken);
        if (!decode.exp) return;
        const date = new Date(0);
        date.setUTCSeconds(decode.exp);
        setExpDate(date);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  };

  return { handleExpDate };
};

export default useExpDate;
