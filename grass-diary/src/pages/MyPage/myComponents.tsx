import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Grass from './Grass';
import Diary from './Diary';
import * as S from '../../styles/MyPage/MyStyles';
import { EllipsisBox, EllipsisIcon, Profile } from '@components/index';
import { useProfile } from '@state/profile/useProfile';

const MainContainer = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('latest');
  const [selectedDiary, setSelectedDiary] = useState<IDiary[] | undefined>(
    undefined,
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    navigate(`?sort=${order}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sortQuery = params.get('sort');

    if (sortQuery) setSortOrder(sortQuery);
  }, [window.location.search]);

  return (
    <S.ViewportContainer>
      <ProfileSection setSelectedDiary={setSelectedDiary} />
      <S.MainSection>
        <SearchBar onSearchChange={handleSearchChange} />
        <S.UserDiarySection>
          <S.DiaryContentContainer>
            <SortButton onSortChange={handleSortChange} />
            <Diary
              setSelectedDiary={setSelectedDiary}
              searchTerm={searchTerm}
              sortOrder={sortOrder}
              selectedDiary={selectedDiary}
            />
          </S.DiaryContentContainer>
        </S.UserDiarySection>
      </S.MainSection>
    </S.ViewportContainer>
  );
};

interface IProfileSection {
  setSelectedDiary: React.Dispatch<React.SetStateAction<IDiary[] | undefined>>;
}

const ProfileSection = ({ setSelectedDiary }: IProfileSection) => {
  const { nickname, profileIntro } = useProfile();

  return (
    <>
      <S.UserInfoArticle>
        <Profile width="4.5rem" height="4.5rem" />
        <S.UserNameText>{nickname}</S.UserNameText>
        <S.UserInfoText>
          {profileIntro !== '' ? profileIntro : '작성한 소개글이 표시됩니다.'}
        </S.UserInfoText>
      </S.UserInfoArticle>
      <S.GrassArticle>
        <S.GrassYearTagBox>
          <S.GrassYearText>2024년 잔디 현황</S.GrassYearText>
        </S.GrassYearTagBox>
        <Grass setSelectedDiary={setSelectedDiary} />
      </S.GrassArticle>
    </>
  );
};

interface ISearchBar {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onSearchChange }: ISearchBar) => {
  return (
    <S.SearchArticle>
      <S.SearchBox>
        <S.SearchImg src="/assets/icons/search.svg" />
        <S.SearchInput
          placeholder="일기 내용을 검색해 보세요..."
          onChange={onSearchChange}
        />
      </S.SearchBox>
    </S.SearchArticle>
  );
};

interface ISortButton {
  onSortChange: (sortOrder: string) => void;
}

const SortButton = ({ onSortChange }: ISortButton) => {
  return (
    <S.DiaryControlBox>
      <EllipsisIcon width="170" translateValue="145px">
        <EllipsisBox
          onClick={() => onSortChange('latest')}
          text="최신 순으로 보기"
        />
        <EllipsisBox
          onClick={() => onSortChange('oldest')}
          text="오래된 순으로 보기"
        />
      </EllipsisIcon>
    </S.DiaryControlBox>
  );
};

export { MainContainer };
