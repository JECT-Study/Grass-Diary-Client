import * as S from '@styles/component/Comment/CommentDisplay.style';
import { useEffect, useRef, useState } from 'react';
import { useWriterProfile } from '@hooks/api/useWriterProfile';
import { useCommentActions } from '@state/comment/CommentStore';
import { ReactComponent as ReplyIcon } from '@svg/subdirectory_arrow_right.svg';
import CommentSetting from './CommentSetting';
import { useTodayDate } from '@hooks/api/useTodayDate';
import { useUser } from '@state/user/useUser';
import { COMMENT } from '@constants/message';

const CommentDisplay = ({ comment, parentId }: CommentDisplayProps) => {
  const { data: writer } = useWriterProfile(comment.memberId);
  const memberId = useUser();
  const { setReplyId } = useCommentActions();
  const { date } = useTodayDate();
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    if (date && comment.createdDate) {
      if (
        +comment.createdDate.slice(0, 2) === date.year % 100 &&
        +comment.createdDate.slice(4, 6) === date.month &&
        +comment.createdDate.slice(8, 10) === date.date
      ) {
        setIsToday(true);
      }
    }
  }, [date, comment.createdDate]);

  return comment.deleted ? (
    <S.CommentItem $isMe={memberId === comment.memberId}>
      <S.WriterBox>
        {comment.depth ? <ReplyIcon /> : null}
        <S.DeletedText>{COMMENT.deleted}</S.DeletedText>
      </S.WriterBox>
    </S.CommentItem>
  ) : (
    <S.CommentItem $isMe={memberId === comment.memberId}>
      <S.TopBox>
        <S.WriterBox>
          {comment.depth ? <ReplyIcon /> : null}
          <S.ProfileImage src={writer?.profileImageURL} />
          <S.NameText $isMe={memberId === comment.memberId}>
            {writer?.nickname}
          </S.NameText>
          <S.TimeText>
            {isToday
              ? comment.createdAt
              : comment.createdDate
              ? `20${comment.createdDate}`
              : ''}
          </S.TimeText>
        </S.WriterBox>
        <CommentSetting
          commentId={comment.commentId}
          writerId={comment.memberId}
        />
      </S.TopBox>
      <S.BottomBox>
        <S.ContentText $isReply={comment.depth ? true : false}>
          {comment.content}
        </S.ContentText>
        <S.ReplyButton onClick={() => setReplyId(parentId)}>
          댓글 달기
        </S.ReplyButton>
      </S.BottomBox>
    </S.CommentItem>
  );
};

export default CommentDisplay;
