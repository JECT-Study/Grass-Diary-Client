import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useParamsId = () => {
  const { diaryId } = useParams();
  const diaryId_num = Number(diaryId);
  const navigate = useNavigate();

  useEffect(() => {
    if (Number.isNaN(diaryId_num) || diaryId_num === 0) {
      navigate('/non-existent-page');
    }
  }, [diaryId_num]);

  return diaryId_num;
};
