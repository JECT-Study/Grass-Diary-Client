import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { AxiosError } from 'axios';

interface ThemeApply {
  memberId: number;
  colorCodeId: number;
  colorName: string;
  rgb: string;
}

export const useThemeSetting = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, ThemeApply>({
    mutationFn: ({ memberId, colorCodeId, colorName, rgb }: ThemeApply) =>
      API.post(END_POINT.theme_setting(colorCodeId), {
        memberId,
        colorCodeId,
        colorName,
        rgb,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['themes'] });
    },
  });
};
