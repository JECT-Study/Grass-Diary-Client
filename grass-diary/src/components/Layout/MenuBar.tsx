import person from '@svg/person.svg';
import setting from '@svg/settings.svg';
import logout from '@svg/logout.svg';
import arrow from '@svg/arrow_drop_down.svg';
import useLogout from '@hooks/useLogout';
import history from '@svg/history.svg';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Menus, Menu } from '@components/index';

const MenuBar = () => {
  const navigate = useNavigate();
  const clearAuth = useLogout();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    clearAuth();
    queryClient.resetQueries({ queryKey: ['memberId'] });
  };

  return (
    <div>
      <Menus icon={arrow}>
        <Menu
          onClick={() => navigate('/mypage')}
          text={'마이페이지'}
          svg={person}
        />
        <Menu
          onClick={() => navigate('/rewardpage')}
          text={'리워드 내역'}
          svg={history}
          line={0.25}
        />
        <Menu
          onClick={() => navigate('/setting')}
          text={'설정'}
          svg={setting}
        />
        <Menu onClick={handleLogout} text={'로그아웃'} svg={logout} />
      </Menus>
    </div>
  );
};

export default MenuBar;
