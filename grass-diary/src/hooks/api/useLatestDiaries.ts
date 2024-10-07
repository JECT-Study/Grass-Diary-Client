import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

interface ILatestDiaryResponse {
  pageParams: number[];
  pages: Feed[][];
}

const fetchLatestDiary = (cursorId: number) => {
  return API.get(END_POINT.share_latest(cursorId));
};

export const useLatestDiaries = () => {
  const { renderErrorPage } = useError();
  const { data, fetchNextPage, isError, error } = useInfiniteQuery<
    Feed[],
    AxiosError<ApiErrorResponse>,
    ILatestDiaryResponse,
    [string],
    number
  >({
    queryKey: ['lastest-diaries'],
    queryFn: async ({ pageParam }) => {
      const res = await fetchLatestDiary(pageParam);
      return res.data.diaries;
    },
    getNextPageParam: lastPage => {
      if (lastPage.length === 0) return undefined;
      return lastPage[lastPage.length - 1].diaryId;
    },
    initialPageParam: 922337203685477600,
  });

  const latest: Feed[][] = data?.pages || [];

  if (isError) {
    console.error(error);
    renderErrorPage(error);
  }

  return { latest, fetchNextPage };
};
