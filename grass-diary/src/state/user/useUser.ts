import { useAuth } from '../auth/useAuth';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import API from '@services/index';
import { END_POINT } from '@constants/api';
import { AxiosError } from 'axios';
import { useMemberId, useSetMemberId } from './UserStore';
import { MODAL } from '@constants/message';
import { semantic } from '@styles/semantic';
import { INTERACTION } from '@styles/interaction';
import { useModal } from '@state/modal/useModal';
import { useNetwork } from '@hooks/useNetwork';

const fetchAxios = async () => {
  const res = await API.get(END_POINT.member_info);
  return res.data.memberId;
};

export const useUser = () => {
  const { isAuthenticated } = useAuth();
  const memberId = useMemberId();
  const setMemberId = useSetMemberId();
  const { modal } = useModal();
  const isNetworkOffline = useNetwork();

  const { data, isSuccess, isError, error } = useQuery<
    number,
    AxiosError<ApiErrorResponse>,
    number,
    string[]
  >({
    queryKey: ['memberId'],
    queryFn: fetchAxios,
    enabled: !!isAuthenticated,
    retry: 1,
  });

  useEffect(() => {
    if (isSuccess) setMemberId(data);
    if (!isAuthenticated) setMemberId(0);
    if (isError) {
      const logout = localStorage.getItem('logout');
      if (logout === null) {
        const content = isNetworkOffline
          ? MODAL.network_error.content
          : error.response
          ? error.response?.data.description + '\n다시 로그인 해주세요'
          : '다시 로그인 해주세요';

        const setting = {
          title: isNetworkOffline
            ? MODAL.network_error.title
            : MODAL.authentication_error.title,
          content: content,
        };

        const button1 = {
          active: true,
          text: MODAL.confirm,
          color: semantic.light.accent.solid.hero,
          interaction: INTERACTION.accent.subtle(),
          clickHandler: () => (window.location.href = '/'),
        };

        modal(setting, button1);
        setMemberId(0);
      }
    }
  }, [isAuthenticated, isError, isSuccess]);

  return memberId;
};
