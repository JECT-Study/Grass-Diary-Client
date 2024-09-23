import { useNavigate } from 'react-router-dom';
import { useAuthActions } from '@state/auth/authStore';
import { useSetMemberId } from '@state/user/UserStore';

const useLogout = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthActions();
  const setMemberId = useSetMemberId();

  const clearAuth = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    setMemberId(0);

    navigate('/');
  };

  return clearAuth;
};

export default useLogout;
