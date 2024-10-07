import { END_POINT } from '@constants/api';
import { useError } from '@hooks/useError';
import API from '@services/index';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetComment = (diaryId: Id) => {
  const { renderErrorPage } = useError();
  const { data, isError, error } = useQuery<
    CommentResponse[],
    AxiosError<ApiErrorResponse>
  >({
    queryKey: ['comment', diaryId],
    queryFn: async () => {
      const res = await API.get(END_POINT.comment(diaryId));
      return res.data;
    },
  });

  if (isError) {
    console.error(error);
    renderErrorPage(error);
  }

  return { data };
};
