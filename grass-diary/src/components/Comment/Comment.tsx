import React from 'react';
import CommentDisplay from './CommentDisplay';
import { PatchInput, PostInput } from './Input';
import {
  useCommentEditId,
  useCommentReplyId,
} from '@state/comment/CommentStore';

const ChildCommentList = ({ childs, parentId }: CommentListProps) => {
  const editId = useCommentEditId();

  return (
    <>
      {childs?.length
        ? childs.map((child: CommentResponse) => {
            return (
              <React.Fragment key={child.commentId}>
                {editId === child.commentId ? (
                  // 대댓글 patch input
                  <PatchInput
                    commentId={child.commentId}
                    isReply={true}
                    content={child.content}
                  />
                ) : (
                  <CommentDisplay comment={child} parentId={parentId} />
                )}
              </React.Fragment>
            );
          })
        : null}
    </>
  );
};

const Comment = ({ comment }: CommentProps) => {
  const editId = useCommentEditId();
  const replyId = useCommentReplyId();

  return (
    <>
      {editId === comment.commentId ? (
        // 댓글 patch input
        <PatchInput
          commentId={comment.commentId}
          isReply={false}
          content={comment.content}
        />
      ) : (
        <CommentDisplay comment={comment} parentId={comment.commentId} />
      )}
      <ChildCommentList
        childs={comment.childComments}
        parentId={comment.commentId}
      />
      {replyId === comment.commentId && (
        // 대댓글 post input
        <PostInput parentId={comment.commentId} />
      )}
    </>
  );
};

export default Comment;
