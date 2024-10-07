import * as S from '../../styles/MyPage/MyStyles';

import DOMPurify from 'dompurify';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

import API from '@services/index';

import { semantic } from '@styles/semantic';
import useDiary from '@hooks/api/useDiary';
import { useUser } from '@state/user/useUser';
import { ReactComponent as FavoriteIcon } from '@svg/favorite.svg';
import { ReactComponent as CommentIcon } from '@svg/comment.svg';
import { MoodProfile, Profile, Divider } from '@components/index';
import Setting from '@pages/DiaryDetail/Setting';
import { END_POINT } from '@constants/api';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

interface IPagination {
  pageSize: number;
  currentPage: number;
  onPageChange: (index: number) => void;
}

const Pagination = ({ pageSize, currentPage, onPageChange }: IPagination) => {
  const handleFirstPage = () => onPageChange(0);

  const handlePreviousPage = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < pageSize - 1) onPageChange(currentPage + 1);
  };

  const handleLastPage = () => {
    onPageChange(pageSize - 1);
  };

  return (
    <S.PaginationContainer>
      <S.PaginationIconButton onClick={handleFirstPage}>
        <S.PaginationImg $imageURL="/assets/icons/icon-btn-first-page.svg" />
      </S.PaginationIconButton>
      <S.PaginationIconButton onClick={handlePreviousPage}>
        <S.PaginationImg $imageURL="/assets/icons/icon-btn-chevron-left.svg" />
      </S.PaginationIconButton>
      {Array.from({ length: pageSize }, (_, index) => (
        <S.PaginationIconButton key={index} onClick={() => onPageChange(index)}>
          {index + 1}
        </S.PaginationIconButton>
      ))}
      <S.PaginationIconButton onClick={handleNextPage}>
        <S.PaginationImg $imageURL="/assets/icons/icon-btn-chevron-right.svg" />
      </S.PaginationIconButton>
      <S.PaginationIconButton onClick={handleLastPage}>
        <S.PaginationImg $imageURL="/assets/icons/icon-btn-last-page.svg" />
      </S.PaginationIconButton>
    </S.PaginationContainer>
  );
};

const DiaryItem = ({ diary, diaryList, index }: IDiaryItem) => {
  const navigate = useNavigate();
  const createMarkup: TCreateMarpkup = htmlContent => {
    const content = htmlContent || '';
    return { __html: DOMPurify.sanitize(content) };
  };

  const handleClickDiaryCard = () => {
    navigate(`/diary/${diary.diaryId}`);
  };

  return (
    <S.DiaryCardArticle onClick={handleClickDiaryCard}>
      <S.DiaryCardHeaderBox>
        <Profile width="2.5rem" height="2.5rem" />
        <S.DiaryCardDateBox>
          <S.DiaryCardDateText>{diary.createdDate}</S.DiaryCardDateText>
          <S.DiaryCardTimeText>{diary.createdAt}</S.DiaryCardTimeText>
        </S.DiaryCardDateBox>
        <MoodProfile diary={diaryList} index={index} />
        <Setting diaryId={diary.diaryId} createdDate={diary.createdDate} />
      </S.DiaryCardHeaderBox>
      {diary.image.length ? (
        <S.DiaryCardImgBox $imageURL={diary.image[0].imageURL} />
      ) : (
        ''
      )}
      <S.DiaryCardText dangerouslySetInnerHTML={createMarkup(diary.content)} />
      <Divider width="100%" />
      <S.DiaryCardBottomBox>
        <S.DiaryCardHashtagBox>
          {diary.tags &&
            diary.tags.map(tag => (
              <S.HashtagBox key={tag.id}>
                <S.HashtagImg src="/assets/icons/tag-tag.svg" />
                <S.HashtagText>{tag.tag}</S.HashtagText>
              </S.HashtagBox>
            ))}
        </S.DiaryCardHashtagBox>
        <S.CommentFavoriteBox>
          <S.DiaryCardItemBox>
            <CommentIcon />
            <S.DiaryCardItemText>{diary.commentCount}</S.DiaryCardItemText>
          </S.DiaryCardItemBox>
          <S.DiaryCardItemBox>
            <FavoriteIcon
              width={22}
              height={22}
              fill={semantic.light.object.transparent.assistive}
            />
            <S.DiaryCardItemText>{diary.likeCount}</S.DiaryCardItemText>
          </S.DiaryCardItemBox>
        </S.CommentFavoriteBox>
      </S.DiaryCardBottomBox>
    </S.DiaryCardArticle>
  );
};

interface IDiaryProps {
  searchTerm: string;
  sortOrder: string;
  selectedDiary?: IDiary[];
  setSelectedDiary: any;
}

const Diary = ({
  setSelectedDiary,
  searchTerm,
  sortOrder,
  selectedDiary,
}: IDiaryProps) => {
  const navigate = useNavigate();
  const { renderErrorPage } = useError();
  const [searchParams] = useSearchParams();
  const [hashtagId, setHashtagId] = useState<string | null>(null);
  const [isSelected, setIsSelected] = useState('');

  const memberId = useUser();
  const [currentPage, setCurrentPage] = useState(0);
  const { diaryList, pageSize } = useDiary({
    memberId,
    currentPage,
    sortOrder,
  });

  const filteredDiaryList =
    selectedDiary && selectedDiary.length > 0
      ? selectedDiary
      : diaryList.filter(diary => diary.content.includes(searchTerm));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewAllClick = () => {
    setIsSelected('all');
    navigate('/mypage');
  };

  useEffect(() => {
    const tagId = searchParams.get('tagId');
    tagId ? setHashtagId(tagId) : setHashtagId(null);
  }, [searchParams, navigate]);

  const handleTagClick = (tagId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('tagId', tagId);
    navigate(`/mypage?${params.toString()}`);

    setIsSelected(tagId);
  };

  const { data: hashtagList } = useQuery({
    queryKey: ['hashtagList', memberId],
    queryFn: () =>
      API.get(`/search/hashTag/${memberId}`).then(({ data }) => data),
    enabled: !!memberId,
  });

  const {
    data: selectedTag,
    isError,
    error,
  } = useQuery<
    IDiary,
    AxiosError<ApiErrorResponse>,
    IDiary,
    (string | number | string | null)[]
  >({
    queryKey: ['selectedDiary', memberId, hashtagId],
    queryFn: () =>
      API.get(`${END_POINT.hashtagList(memberId, hashtagId)}`).then(
        ({ data }) => data,
      ),
    enabled: !!hashtagId && !!memberId,
  });

  if (isError) renderErrorPage(error);

  useEffect(() => {
    if (selectedTag) setSelectedDiary(selectedTag);
    if (!selectedTag) setSelectedDiary(undefined);
  }, [selectedTag]);

  return (
    <>
      <S.HashtagAside>
        <S.HashtagListText>해시태그 목록</S.HashtagListText>
        <Divider width="100%" />
        <S.SideHashtagListBox>
          <S.SideHashtagAnchor onClick={handleViewAllClick}>
            <S.SideHashtagList>
              <S.SideHashtagText $variant={isSelected === 'all'}>
                전체 보기
              </S.SideHashtagText>
            </S.SideHashtagList>
            <S.SideHashtagUsageText>
              ({hashtagList && hashtagList.length})
            </S.SideHashtagUsageText>
          </S.SideHashtagAnchor>
          {hashtagList &&
            hashtagList.map(
              (hashtag: { usage: number; tagId: string; tag: string }) => (
                <S.SideHashtagAnchor>
                  <S.SideHashtagList
                    key={hashtag.tagId}
                    onClick={() => handleTagClick(hashtag.tagId)}
                  >
                    <S.SideHashtagText $variant={isSelected === hashtag.tagId}>
                      {hashtag.tag}
                    </S.SideHashtagText>
                  </S.SideHashtagList>
                  <S.SideHashtagUsageText>
                    ({hashtag.usage})
                  </S.SideHashtagUsageText>
                </S.SideHashtagAnchor>
              ),
            )}
        </S.SideHashtagListBox>
      </S.HashtagAside>
      <S.DiaryListContainer>
        {filteredDiaryList.map((diary, index) => (
          <DiaryItem
            key={diary.diaryId}
            diary={diary}
            diaryList={filteredDiaryList}
            index={index}
          />
        ))}
      </S.DiaryListContainer>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Diary;
