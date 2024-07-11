import API from '@services/index';
import END_POINT from '@constants/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const fetchLatestDiary = (cursorId: number) => {
  return API.get(END_POINT.SHARE_LATEST(cursorId));
};

export const useLatestDiaries = () => {
  const { data, fetchNextPage } = useInfiniteQuery<
    ILatestDiary[],
    AxiosError,
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

  const latest: ILatestDiary[][] = data?.pages || [];

  return { latest, fetchNextPage };
};
