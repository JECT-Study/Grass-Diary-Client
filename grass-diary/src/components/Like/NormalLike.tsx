import { semantic } from '@styles/semantic';
import { ReactComponent as Favorite } from '@svg/favorite.svg';
import * as S from '@styles/component/Like/NormalLike.style';

interface INormalLikeProps {
  likeCount: number;
  justifyContent: string;
}

const NormalLike = ({ likeCount, justifyContent }: INormalLikeProps) => {
  return (
    <S.Box $justifyContent={justifyContent}>
      <span>
        <Favorite
          width={22}
          height={22}
          fill={semantic.light.object.transparent.assistive}
        />
      </span>
      <span>{likeCount}</span>
    </S.Box>
  );
};

export default NormalLike;
