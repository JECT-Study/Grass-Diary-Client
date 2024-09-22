import { END_POINT } from '@constants/api';
import API from '@services/index';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useError } from '@hooks/useError';

export const usePatchComment = (diaryId: Id) => {
  const queryClient = useQueryClient();
  const { renderErrorPage } = useError();

  return useMutation({
    mutationFn: (request: PatchRequest) => {
      return API.patch(END_POINT.comment(request.commentId), request.content);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['comment', diaryId] });
    },
    onError(error: AxiosError<ApiErrorResponse>) {
      console.error(error);
      renderErrorPage(error);
    },
  });
};
