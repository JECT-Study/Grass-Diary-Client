import * as S from '@styles/component/Comment/Comments.style';
import { useParamsId } from '@hooks/useParamsId';
import { useGetComment } from '@hooks/api/comment/useGetComment';
import { PostInput } from './Input';
import Comment from './Comment';

const Comments = () => {
  const diaryId = useParamsId();
  const { data: comments } = useGetComment(diaryId);

  return (
    <S.CommentList>
      {comments?.map((comment: CommentResponse) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
      <PostInput parentId={null} />
    </S.CommentList>
  );
};

export default Comments;
