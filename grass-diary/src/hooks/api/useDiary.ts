import { useQuery } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { CONSOLE_ERROR } from '@constants/message';

interface IUseDiaryProps {
  memberId: Id;
  currentPage: number;
  sortOrder: string;
}

const useDiary = ({ memberId, currentPage, sortOrder }: IUseDiaryProps) => {
  const queryKey = ['diaryList', { memberId, currentPage, sortOrder }];

  const queryFn = async (): Promise<IDiaryResponse> => {
    let apiUrl = END_POINT.my_diaries(memberId, currentPage);

    if (sortOrder === 'oldest') apiUrl += `&sort=createdAt,ASC`;
    const response = await API.get(apiUrl);

    return response.data;
  };

  const { data: diary } = useQuery<
    IDiaryResponse,
    Error,
    IDiaryResponse,
    (string | IUseDiaryProps)[]
  >({
    queryKey,
    queryFn,
    enabled: !!memberId,
    onError: error => console.error(CONSOLE_ERROR.diary.get + error),
  });

  const diaryList: IDiary[] = diary?.content || [];
  const pageSize: number = diary?.totalPages || 0;

  return { diaryList, pageSize };
};

export default useDiary;
