import { END_POINT } from '@constants/api';
import API from '@services/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteComment = (diaryId: Id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId: Id) =>
      API.patch(END_POINT.comment_delete(commentId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment', diaryId] });
    },
    onError: error => {
      console.error(error);
    },
  });
};
