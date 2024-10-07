import { useQuery } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { AxiosError } from 'axios';
import { CONSOLE_ERROR } from '@constants/message';
import { useError } from '@hooks/useError';

const fetchTodayQuestion = async (): Promise<TodayQuestion> => {
  const res = await API.get(END_POINT.today_question);
  return res.data;
};

export const useTodayQuestion = () => {
  const { renderErrorPage } = useError();
  const {
    data: question,
    isError,
    error,
  } = useQuery<
    TodayQuestion,
    AxiosError<ApiErrorResponse>,
    TodayQuestion,
    [string]
  >({
    queryKey: ['todayQuestion'],
    queryFn: fetchTodayQuestion,
  });

  if (isError) {
    console.error(CONSOLE_ERROR.question.get + error.message);
    renderErrorPage(error);
  }

  return { question };
};
