import * as S from '@styles/component/Comment/CommentDisplay.style';
import { useEffect, useRef, useState } from 'react';
import { useWriterProfile } from '@hooks/api/useWriterProfile';
import { useCommentActions } from '@state/comment/CommentStore';
import { ReactComponent as ReplyIcon } from '@svg/subdirectory_arrow_right.svg';
import CommentSetting from './CommentSetting';
import { useTodayDate } from '@hooks/api/useTodayDate';
import { useUser } from '@state/user/useUser';
import { COMMENT } from '@constants/message';
import useTheme from '@hooks/useTheme';

const CommentDisplay = ({ comment, parentId }: CommentDisplayProps) => {
  const memberId = useUser();
  const setting = useRef<HTMLDivElement>(null);

  const { setReplyId } = useCommentActions();
  const { date } = useTodayDate();
  const { isDarkMode } = useTheme();
  const { data: writer } = useWriterProfile(comment.memberId);

  const [isToday, setIsToday] = useState(false);

  const reply = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (setting.current) {
      if (setting.current.contains(e.target as HTMLElement)) return;
    }

    setReplyId(parentId);
  };

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
        {comment.depth ? (
          <ReplyIcon fill={isDarkMode ? '#D4D4D4' : '#474747'} />
        ) : null}
        <S.DeletedText>{COMMENT.deleted}</S.DeletedText>
      </S.WriterBox>
    </S.CommentItem>
  ) : (
    <S.CommentItem onClick={reply} $isMe={memberId === comment.memberId}>
      <S.TopBox>
        <S.WriterBox>
          {comment.depth ? (
            <ReplyIcon fill={isDarkMode ? '#D4D4D4' : '#474747'} />
          ) : null}
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
        <div ref={setting}>
          <CommentSetting
            commentId={comment.commentId}
            writerId={comment.memberId}
          />
        </div>
      </S.TopBox>
      <S.ContentBox $isReply={comment.depth ? true : false}>
        {comment.content}
      </S.ContentBox>
    </S.CommentItem>
  );
};

export default CommentDisplay;
