import * as S from '@styles/component/Like/Like.style';
import { useEffect, useState } from 'react';
import { useCountLike } from '@hooks/api/useCountLike';
import { useUser } from '@state/user/useUser';
import useTheme from '@hooks/useTheme';

interface ILikeProps {
  diaryId: Id;
  likeCount: number;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
  liked: boolean | undefined;
}

const Like = ({ diaryId, likeCount, setLikeCount, liked }: ILikeProps) => {
  const memberId = useUser();
  const [isPushed, setIsPushed] = useState(false);
  const { isDarkMode } = useTheme();
  const { postLike, deleteLike, postSuccess, deleteSuccess } = useCountLike({
    diaryId,
    memberId,
  });

  const likeHandler = () => {
    if (isPushed) deleteLike();
    else postLike();
  };

  useEffect(() => {
    if (postSuccess) {
      setIsPushed(true);
      setLikeCount(prev => (prev += 1));
    }
  }, [postSuccess]);

  useEffect(() => {
    if (deleteSuccess) {
      setIsPushed(false);
      setLikeCount(prev => (prev -= 1));
    }
  }, [deleteSuccess]);

  useEffect(() => {
    liked ? setIsPushed(true) : setIsPushed(false);
  }, [liked]);

  return (
    <S.LikeContainer $isPushed={isPushed} onClick={likeHandler}>
      <S.CountText>{likeCount}</S.CountText>
      {isPushed ? (
        <S.YES width={18} height={18} />
      ) : (
        <S.No fill={isDarkMode ? '#D4D4D4' : '#474747'} />
      )}
    </S.LikeContainer>
  );
};

export default Like;
