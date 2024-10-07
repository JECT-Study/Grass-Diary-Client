import { END_POINT } from '@constants/api';
import { useUser } from '@state/user/useUser';
import { useQuery } from '@tanstack/react-query';
import API from '@services/index';
import { AxiosError } from 'axios';
import { CONSOLE_ERROR } from '@constants/message';
import { useError } from '@hooks/useError';

export const useGrassRecord = () => {
  const memberId = useUser();
  const { renderErrorPage } = useError();
  const fetchUseGrassRecord = async (): Promise<GrassApiResponse> => {
    const res = await API.get(END_POINT.grass(memberId));
    return res.data;
  };

  const {
    data: grassQuery,
    isError,
    error,
  } = useQuery<
    GrassApiResponse,
    AxiosError<ApiErrorResponse>,
    GrassApiResponse,
    [string, number]
  >({
    queryKey: ['grass', memberId],
    queryFn: fetchUseGrassRecord,
    enabled: !!memberId,
  });

  if (isError) {
    console.error(CONSOLE_ERROR.grass.get + error.message);
    renderErrorPage(error);
  }

  return { grassQuery };
};
