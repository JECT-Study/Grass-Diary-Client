import { useQuery } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useUser } from '@state/user/useUser';
import { AxiosError } from 'axios';

interface Color {
  id: number;
  colorName: string;
  rgb: string;
  price: number;
}

export const useThemeList = () => {
  const memberId = useUser();

  const fetchUseThemeList = async (): Promise<Color[]> => {
    const { data } = await API.get(END_POINT.theme_list(memberId));
    return data;
  };

  const {
    data: themeList,
    isError,
    error,
  } = useQuery<Color[], AxiosError, Color[], [string, number | undefined]>({
    queryKey: ['themeList', memberId],
    queryFn: fetchUseThemeList,
    enabled: !!memberId,
  });

  if (isError) console.error(`색상 리스트 에러: ${error?.message}`);

  return { themeList, isError };
};
