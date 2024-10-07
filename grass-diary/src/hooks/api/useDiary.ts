import { useQuery } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { CONSOLE_ERROR } from '@constants/message';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

interface IUseDiaryProps {
  memberId: Id;
  currentPage: number;
  sortOrder: string;
}

const useDiary = ({ memberId, currentPage, sortOrder }: IUseDiaryProps) => {
  const { renderErrorPage } = useError();
  const queryKey = ['diaryList', { memberId, currentPage, sortOrder }];

  const queryFn = async (): Promise<IDiaryResponse> => {
    let apiUrl = END_POINT.my_diaries(memberId, currentPage);

    if (sortOrder === 'oldest') apiUrl += `&sort=createdAt,ASC`;
    const response = await API.get(apiUrl);

    return response.data;
  };

  const {
    data: diary,
    isError,
    error,
  } = useQuery<
    IDiaryResponse,
    AxiosError<ApiErrorResponse>,
    IDiaryResponse,
    (string | IUseDiaryProps)[]
  >({
    queryKey,
    queryFn,
    enabled: !!memberId,
  });

  const diaryList: IDiary[] = diary?.content || [];
  const pageSize: number = diary?.totalPages || 0;

  if (isError) {
    console.error(CONSOLE_ERROR.diary.get + error);
    renderErrorPage(error);
  }

  return { diaryList, pageSize };
};

export default useDiary;
