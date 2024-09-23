import * as S from '@styles/component/Comment/Input.style';
import { useEffect, useState } from 'react';

import { useParamsId } from '@hooks/useParamsId';
import { useUser } from '@state/user/useUser';
import { useProfile } from '@state/profile/useProfile';
import { useCommentActions } from '@state/comment/CommentStore';
import { usePostComment } from '@hooks/api/comment/usePostComment';
import { usePatchComment } from '@hooks/api/comment/usePatchComment';
import { ReactComponent as ReplyIcon } from '@svg/subdirectory_arrow_right.svg';
import { COMMENT } from '@constants/message';

const CommentInput = ({
  submit,
  text,
  setText,
  isReply,
  isCancelBtn,
  isPatch,
}: CommentInputProps) => {
  const { profileImageURL, nickname } = useProfile();
  const { resetEditId, resetReplyId } = useCommentActions();
  const [focus, setFocus] = useState(false);
  const [rows, setRows] = useState(1);

  // focus 될 때
  const onFocus = () => setFocus(true);

  // focus 해지될 때
  const onBlur = () => setFocus(false);

  const commentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setRows(e.target.value.split('\n').length);
  };

  const cancel = () => {
    if (isPatch) resetEditId();
    else resetReplyId();
  };

  const submitBtn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    submit(e);
    setRows(1);
  };

  useEffect(() => {
    if (text) {
      setRows(text.split('\n').length);
    }
  }, [text]);

  return (
    <S.InputContainer $focus={focus} $isReply={isReply}>
      <S.TopBox>
        <S.WriterBox>
          {isReply && <ReplyIcon />}
          <S.ProfileImage src={profileImageURL} />
          <S.NameText>{nickname}</S.NameText>
        </S.WriterBox>
      </S.TopBox>
      <S.InputBox>
        <S.Input
          rows={rows}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={commentHandler}
          placeholder={COMMENT.placeholder}
        />
        {isCancelBtn && <S.CancelButton onClick={cancel}>취소</S.CancelButton>}
        <S.SubmitButton
          type="button"
          onClick={submitBtn}
          disabled={text === ''}
        >
          등록
        </S.SubmitButton>
      </S.InputBox>
    </S.InputContainer>
  );
};

// parentId가 null이라면 댓글, 아니라면 대댓글
const PostInput = ({ parentId }: PostInputProps) => {
  const diaryId = useParamsId();
  const memberId = useUser();
  const { mutate: postComment } = usePostComment(diaryId);
  const { resetReplyId } = useCommentActions();
  const [text, setText] = useState('');

  const submit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (text === '') return;
    const request = {
      memberId: memberId,
      diaryId: diaryId,
      content: text,
      parentCommentId: parentId,
    };

    postComment(request, {
      onSuccess() {
        setText('');
        resetReplyId();
      },
    });
  };
  return (
    <CommentInput
      submit={submit}
      text={text}
      setText={setText}
      isReply={parentId ? true : false}
      isCancelBtn={parentId ? true : false}
      isPatch={false}
    />
  );
};

const PatchInput = ({ commentId, isReply, content }: PatchInputProps) => {
  const [text, setText] = useState('');
  const diaryId = useParamsId();
  const { mutate: patchComment } = usePatchComment(diaryId);
  const { resetEditId } = useCommentActions();

  const submit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (text === '') return;
    const request = {
      commentId: commentId,
      content: {
        content: text,
      },
    };

    if (commentId) {
      patchComment(request, {
        onSuccess() {
          resetEditId();
        },
      });
    }
  };

  useEffect(() => {
    setText(content);
  }, [content]);

  return (
    <CommentInput
      submit={submit}
      text={text}
      setText={setText}
      isReply={isReply}
      isCancelBtn={true}
      isPatch={true}
    />
  );
};

export { PostInput, PatchInput };
