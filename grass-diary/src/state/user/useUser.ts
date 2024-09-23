import { useAuth } from '../auth/useAuth';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMemberId, useSetMemberId } from './UserStore';
import API from '@services/index';
import { END_POINT } from '@constants/api';

const fetchAxios = async () => {
  const res = await API.get(END_POINT.member_info);
  return res.data.memberId;
};

export const useUser = (): Id => {
  const { isAuthenticated } = useAuth();
  const memberId = useMemberId();
  const setMemberId = useSetMemberId();

  const { data, isSuccess, isError } = useQuery<
    number,
    Error,
    number,
    string[]
  >({
    queryKey: ['memberId'],
    queryFn: fetchAxios,
    enabled: !!isAuthenticated,
  });

  useEffect(() => {
    if (!isAuthenticated) setMemberId(0);
    else if (isError) setMemberId(0);
    else if (isSuccess) setMemberId(data);
  }, [isAuthenticated, isError, isSuccess]);

  return memberId;
};
