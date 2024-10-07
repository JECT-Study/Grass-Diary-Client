import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

const fetchPopularDiary = () => {
  return API.get(END_POINT.share_popular);
};

export const usePopularDiaries = () => {
  const { renderErrorPage } = useError();
  const { data, isError, error } = useQuery<
    Feed[],
    AxiosError<ApiErrorResponse>,
    Feed[],
    [string]
  >({
    queryKey: ['top10'],
    queryFn: async () => {
      const res = await fetchPopularDiary();
      return res.data;
    },
  });

  if (isError) {
    console.error(error);
    renderErrorPage(error);
  }
  return { data };
};
