interface Feed {
  diaryId: Id;
  memberId: Id;
  createdAt: string;
  nickname: string;
  content: string;
  diaryLikeCount: number;
  transparency: number;
  commentCount: number;
  image: DiaryImage[];
}
