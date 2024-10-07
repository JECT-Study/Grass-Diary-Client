import API from '@services/index';
import { END_POINT } from '@constants/api';

import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { useWriterProfile } from './useWriterProfile';
import { useError } from '@hooks/useError';

const fetchDiaryDetails = async (id: Id): Promise<IDiaryDetail> => {
  const res = await API.get(END_POINT.diary(id));

  return res.data;
};

export const useDiaryDetail = (diaryId: Id) => {
  const {
    data: detail,
    isLoading,
    isError,
    error,
  } = useQuery<
    IDiaryDetail,
    AxiosError<ApiErrorResponse>,
    IDiaryDetail,
    [string, Id]
  >({
    queryKey: ['get-diaryDetail', diaryId],
    queryFn: () => fetchDiaryDetails(diaryId),
    retry: 1,
  });

  const writerId = detail?.memberId;
  const { data: writer } = useWriterProfile(writerId!);
  const { renderErrorPage } = useError();

  if (isError) {
    console.error(error);
    renderErrorPage(error);
  }

  return { detail, writer, isLoading };
};
