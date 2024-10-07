import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useMutation } from '@tanstack/react-query';
import { TOAST } from '@constants/message';
import { useToast } from '@state/toast/useToast';
import { useNavigate } from 'react-router-dom';

const deleteAxios = (id: Id) => {
  return API.delete(END_POINT.diary(id));
};

export const useDeleteDiaryDetail = (id: Id) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => {
      return deleteAxios(id);
    },
    onSuccess: () => {
      localStorage.removeItem('lastWritingDate');
      navigate(-1);
      toast(TOAST.delete_diary);
    },
  });
};
