import { useNavigate } from 'react-router-dom';
import { useAuthActions } from '@state/auth/authStore';
import { useSetMemberId } from '@state/user/UserStore';

const useLogout = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthActions();
  const setMemberId = useSetMemberId();

  const clearAuth = (isExp?: boolean) => {
    localStorage.removeItem('accessToken');
    localStorage.setItem('logout', 'true');
    setIsAuthenticated(false);
    setMemberId(0);

    if (isExp) return;
    navigate('/');
  };

  return clearAuth;
};

export default useLogout;
