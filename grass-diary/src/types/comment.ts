type PostRequest = {
  memberId: Id;
  diaryId: Id;
  content: string;
  parentCommentId: Id | null;
};

type PatchRequest = {
  commentId: Id;
  content: {
    content: string;
  };
};

type CommentResponse = {
  commentId: Id;
  memberId: Id;
  content: string;
  deleted: boolean;
  createdDate: string;
  createdAt: string;
  depth: number;
  childComments: CommentResponse[];
};

type CommentSettingProps = {
  commentId: Id;
  writerId: Id;
};

type CommentProps = {
  comment: CommentResponse;
};

type CommentListProps = {
  childs: CommentResponse[];
  parentId: Id;
};

type CommentDisplayProps = {
  comment: CommentResponse;
  parentId: Id;
};

// input 관련 props 타입
type CommentInputProps = {
  submit: (e) => void;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  isReply: boolean;
  isCancelBtn: boolean;
  isPatch: boolean;
};

type PostInputProps = {
  parentId: Id | null;
};

type PatchInputProps = {
  commentId: Id;
  isReply: boolean;
  content: string;
};
