import { useQuery } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

const fetchUserProfiles = (memberId: Id) => {
  return API.get(END_POINT.member_profile(memberId));
};

export const useWriterProfile = (writerId: Id) => {
  const { renderErrorPage } = useError();
  const { data, isError, error } = useQuery<
    IProfile,
    AxiosError<ApiErrorResponse>,
    IProfile,
    [string, Id]
  >({
    queryKey: ['writer-data', writerId],
    queryFn: async () => {
      const res = await fetchUserProfiles(writerId);
      return res.data;
    },
    enabled: !!writerId,
  });

  if (isError) {
    console.error(error);
    renderErrorPage(error);
  }

  return { data };
};
