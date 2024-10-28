import { END_POINT } from '@constants/api';
import API from '@services/index';
import { useToast } from '@state/toast/useToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const fetchAxios = async (diaryId: Id) => {
  const res = await API.patch(END_POINT.visibility(diaryId));
  return res.data;
};

export const usePatchVisibility = (diaryId: Id, isPrivate?: boolean) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => fetchAxios(diaryId),
    onSuccess: () => {
      toast(isPrivate ? '일기를 공개했어요' : '일기를 비공개했어요');
      queryClient.invalidateQueries({
        queryKey: ['get-diaryDetail'],
      });
    },
  });
};
