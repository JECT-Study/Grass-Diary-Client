import { END_POINT } from '@constants/api';
import API from '@services/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostComment = (diaryId: Id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: PostRequest) =>
      API.post(END_POINT.comment(diaryId), request),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['comment', diaryId] });
    },
    onError(error) {
      console.error(error.response.data.description);
    },
  });
};
