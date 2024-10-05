import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useSnackBar } from '@state/toast/useSnackBar';
import { SNACKBAR } from '@constants/message';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

export const useCreateDiary = (memberId: number) => {
  const { renderErrorPage } = useError();

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
    onError: (error: AxiosError<ApiErrorResponse>) => {
      console.error(error);
      renderErrorPage(error);
    },
  });
};
