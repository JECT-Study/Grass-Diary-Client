import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useSnackBar } from '@state/toast/useSnackBar';
import { SNACKBAR } from '@constants/message';
import { AxiosError } from 'axios';

export const useCreateDiary = (memberId: number) => {
  const { snackBar } = useSnackBar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: DiaryRequest) =>
      API.post(END_POINT.diary(memberId), request),
    onSuccess: res => {
      const rewardText = res.data.rewardPoint;

      snackBar(
        SNACKBAR.reward.message(rewardText),
        SNACKBAR.reward.highlight(rewardText),
        SNACKBAR.reward.linkText,
        SNACKBAR.reward.page,
      );
      queryClient.invalidateQueries({ queryKey: ['diaries'] });
    },
  });
};
