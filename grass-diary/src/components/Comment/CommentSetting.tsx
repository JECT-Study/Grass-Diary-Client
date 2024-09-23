import * as S from '@styles/component/Comment/CommentSetting.style';
import { semantic } from '@styles/semantic';
import moreVert from '@svg/more_vert.svg';
import editIcon from '@svg/mode_edit.svg';
import deleteIcon from '@svg/delete_forever.svg';

import { useParamsId } from '@hooks/useParamsId';
import { useDeleteComment } from '@hooks/api/comment/useDeleteComment';
import { useCommentActions } from '@state/comment/CommentStore';
import { useUser } from '@state/user/useUser';
import { useDiaryDetail } from '@hooks/api/useDiaryDetail';
import { Menus, Menu } from '@components/index';

const CommentSetting = ({ commentId, writerId }: CommentSettingProps) => {
  const diaryId = useParamsId();
  const memberId = useUser();
  const { detail } = useDiaryDetail(diaryId);
  const { setEditId } = useCommentActions();
  const { mutate: deleteComment } = useDeleteComment(diaryId);

  const editHandler = () => setEditId(commentId);

  return (
    <S.SettingBox>
      {memberId === detail?.memberId ? (
        <Menus icon={moreVert}>
          {memberId === writerId && (
            <Menu onClick={editHandler} text={'댓글 수정'} svg={editIcon} />
          )}
          <Menu
            onClick={() => deleteComment(commentId)}
            text={'댓글 삭제'}
            svg={deleteIcon}
            color={semantic.light.feedback.solid.negative}
          />
        </Menus>
      ) : (
        memberId === writerId && (
          <Menus icon={moreVert}>
            <Menu onClick={editHandler} text={'댓글 수정'} svg={editIcon} />
            <Menu
              onClick={() => deleteComment(commentId)}
              text={'댓글 삭제'}
              svg={deleteIcon}
              color={semantic.light.feedback.solid.negative}
            />
          </Menus>
        )
      )}
    </S.SettingBox>
  );
};

export default CommentSetting;
