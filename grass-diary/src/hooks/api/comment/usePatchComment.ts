import API from '@services/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePatchComment = (diaryId: Id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: PatchRequest) => {
      return API.patch(`/comment/${request.commentId}`, request.content);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['comment', diaryId] });
    },
    onError(error) {
      console.error(error);
    },
  });
};
