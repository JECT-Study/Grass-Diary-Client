import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useMutation } from '@tanstack/react-query';
import { CONSOLE_ERROR } from '@constants/message';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

interface IApiProps {
  diaryId: Id;
  memberId: Id;
}

const postLikeApi = ({ diaryId, memberId }: IApiProps) => {
  return API.post(END_POINT.like(diaryId, memberId));
};

const deleteLikeApi = ({ diaryId, memberId }: IApiProps) => {
  return API.delete(END_POINT.like(diaryId, memberId));
};

export const useCountLike = ({ diaryId, memberId }: IApiProps) => {
  const { renderErrorPage } = useError();
  const { mutate: postLike, isSuccess: postSuccess } = useMutation({
    mutationFn: () => {
      return postLikeApi({ diaryId, memberId });
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      console.error(CONSOLE_ERROR.like.post + error);
      renderErrorPage(error);
    },
  });

  const { mutate: deleteLike, isSuccess: deleteSuccess } = useMutation({
    mutationFn: () => {
      return deleteLikeApi({ diaryId, memberId });
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      console.error(CONSOLE_ERROR.like.delete + error);
      renderErrorPage(error);
    },
  });

  return { postLike, deleteLike, postSuccess, deleteSuccess };
};
