import { END_POINT } from '@constants/api';
import { CONSOLE_ERROR } from '@constants/message';
import API from '@services/index';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const fetchAxios = async (): Promise<TodayDate> => {
  const res = await API.get(END_POINT.today_date);

  return res.data;
};

export const useTodayDate = () => {
  const {
    data: date,
    isError,
    error,
  } = useQuery<TodayDate, AxiosError, TodayDate, [string]>({
    queryKey: ['todayDate'],
    queryFn: fetchAxios,
  });

  if (isError) console.error(CONSOLE_ERROR.date.get + error.message);

  return { date };
};
