import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface PatchAxiosProps {
  diaryId: Id;
  request: DiaryRequest;
}

const fetchAxios = ({ diaryId, request }: PatchAxiosProps) => {
  return API.patch(END_POINT.diary(diaryId), request);
};

export const usePatchDiary = (diaryId: Id) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (request: DiaryRequest) => fetchAxios({ diaryId, request }),
    onSuccess() {
      navigate(`/diary/${diaryId}`, { replace: true, state: 'editcomplete' });
      localStorage.removeItem('diary_draft');
    },
    onError(error) {
      console.error(error.response.data.description);
    },
  });
};
