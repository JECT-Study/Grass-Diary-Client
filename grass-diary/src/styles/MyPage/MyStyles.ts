import styled, { css } from 'styled-components';

import { TYPO } from '@styles/typo';
import { semantic } from '@styles/semantic';
import { INTERACTION } from '@styles/interaction';

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 20rem;

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(241, 241, 241, 0.3) 100%
    ),
    ${semantic.light.bg.solid.subtler};
`;

export const ViewportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  max-width: 60rem;
  width: 100%;
`;

/* 유저 컨테이너 */
export const UserInfoArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  width: 100%;

  gap: 1rem;
  padding: 4rem 1.5rem 1.25rem 1.5rem;

  @media screen and (max-width: 60em) {
    padding: 4rem 1rem 1.25rem 1rem;
  }
`;

export const UserNameText = styled.span`
  text-align: center;

  ${TYPO.title2};
  color: ${semantic.light.object.solid.normal};
`;

export const UserInfoText = styled.span`
  text-align: center;

  ${TYPO.body2};
  color: ${semantic.light.object.transparent.neutral};
`;

/* 잔디 컨테이너 */

export const GrassArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 1.5rem;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
`;

export const GrassYearTagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.375rem;
  padding: 0.5rem 1rem;

  border-radius: 0.75rem;
  border: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.fill.transparent.assistive};
`;

export const GrassYearText = styled.span`
  text-align: center;

  ${TYPO.label2};
  color: ${semantic.light.object.transparent.alternative};
`;

export const GrassContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  @media screen and (max-width: 60em) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const GrassBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  gap: 0.25rem;

  @media screen and (max-width: 60em) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const GrassDateBox = styled.div<{
  $border: string;
  $background: string;
}>`
  position: relative;

  width: 0.875rem;
  height: 0.875rem;

  border-radius: 0.25rem;
  border: ${({ $border }) => $border};
  background: ${({ $background }) => $background};

  @media screen and (max-width: 60em) {
    width: 2rem;
    height: 2rem;

    border-radius: 0.5rem;
    box-shadow:
      0px 0px 1px 0px rgba(0, 0, 0, 0.04),
      0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  }
`;

export const DaysBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const DateBubbleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  gap: 0.5rem;
  padding: 0.625rem 0.75rem;

  top: -3.2rem;
  right: -1.3rem;

  ${TYPO.label1};
  text-align: center;
  color: ${semantic.light.inverse.solid.normal};

  border-radius: 0.75rem;
  background: ${semantic.light.inverse.solid.bg};

  box-shadow:
    0px 0px 2px 0px rgba(0, 0, 0, 0.06),
    0px 2px 4px 0px rgba(0, 0, 0, 0.06),
    0px 4px 8px 0px rgba(0, 0, 0, 0.13);

  z-index: 3;

  &::after {
    content: '';

    position: absolute;

    top: 2.4rem;
    left: 1.3rem;

    width: 3rem;
    height: 3rem;

    background-image: url('../../../public/assets/icons/pin.svg');
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 60em) {
    right: -0.7rem;
  }
`;

/* 메인 섹션 */

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;

  position: relative;

  max-width: 60rem;
  padding: 0rem 1.5rem 4.5rem 1.5rem;
`;

/* 검색 바 컴포넌트 */

export const SearchArticle = styled.article`
  display: flex;
  align-items: center;
  align-self: stretch;

  max-width: 60rem;

  gap: 1rem;
  padding: 2rem 0rem 1rem 0rem;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: 1rem;
  padding: 1rem 1.25rem;

  border-radius: 1rem;
  border: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.normal};

  @media screen and (max-width: 60em) {
    padding: 0.625rem 1rem;
    gap: 0.75rem;

    border-radius: 0.5rem;
  }
`;

export const SearchImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const SearchInput = styled.input`
  width: 100%;

  ${TYPO.body2};
  color: ${semantic.light.object.transparent.assistive};

  border: none;

  @media screen and (max-width: 60em) {
    ${TYPO.body1};
  }
`;

/* 다이어리 섹션 */

export const UserDiarySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 43rem;

  gap: 2rem;
`;

export const DiaryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: 1.5rem;
`;

/* 다이어리 정렬 컴포넌트 */

export const DiaryControlBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;

  gap: 1rem;
`;

/* 유저 다이어리 컴포넌트 */

export const DiaryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 1rem;
`;

export const DiaryCardArticle = styled.article`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  width: 100%;

  gap: 1.5rem;
  padding: 1.25rem;

  border-radius: 1rem;
  border: 1px solid ${semantic.light.border.transparent.assistive};
  background: ${semantic.light.bg.solid.normal};

  box-shadow:
    0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export const DiaryCardHeaderBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: 0.75rem;
`;

export const DiaryCardDateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;

  gap: 0.25rem;
`;

export const DiaryCardDateText = styled.span`
  ${TYPO.label1};
  color: ${semantic.light.object.transparent.neutral};
`;

export const DiaryCardTimeText = styled.small`
  ${TYPO.caption1};
  color: ${semantic.light.object.transparent.assistive};
`;

export const DiaryCardMoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  padding: 0.25rem;
`;

export const DiaryCardMoreButton = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

export const DiaryCardImgBox = styled.div<{ $imageURL: string }>`
  align-self: stretch;
  height: 22.5rem;

  border-radius: 0.75rem;
  background: url(${props => props.$imageURL}) lightgray 50% / cover no-repeat;
`;

export const DiaryCardText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  align-self: stretch;

  overflow: hidden;
  text-overflow: ellipsis;

  ${TYPO.body2};
  color: ${semantic.light.object.solid.normal};
`;

export const DiaryCardBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;

  gap: 0.75rem;
`;

export const DiaryCardHashtagBox = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;

  gap: 0.5rem;
`;

export const HashtagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  padding: 0.25rem 0.625rem;

  border-radius: 0.5rem;
  border: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.fill.transparent.assistive};
`;

export const HashtagImg = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const HashtagText = styled.span`
  ${TYPO.caption1};
  color: ${semantic.light.object.transparent.alternative};
`;

export const CommentFavoriteBox = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 1rem;
`;

export const DiaryCardItemBox = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  padding: 0.125rem 0rem;
`;

export const DiaryCardItemText = styled.span`
  ${TYPO.label3};
  color: ${semantic.light.object.transparent.assistive};
`;

/* 페이지네이션 컴포넌트 */

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PaginationIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  padding: 0.25rem;

  border: none;
  border-radius: 0.25rem;

  ${INTERACTION.default.normal()}
`;

export const PaginationImg = styled.div<{ $imageURL: string }>`
  width: 1rem;
  height: 1rem;

  background-size: cover;
  background: url(${props => props.$imageURL}) no-repeat center center;
`;

/* 사이드 해시태그 목록 컴포넌트 */

export const HashtagAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;

  left: 1.6rem;

  width: 12.5rem;
  min-width: 12.5rem;

  padding: 1.25rem;
  gap: 1rem;

  border-radius: 1rem;
  border: 1px solid ${semantic.light.border.transparent.assistive};
  background: ${semantic.light.bg.solid.normal};

  box-shadow:
    0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 60em) {
    display: none;
  }
`;

export const HashtagListText = styled.span`
  align-self: stretch;
  height: 1.375rem;

  ${TYPO.label2};
  color: ${semantic.light.object.solid.normal};
`;

export const SideHashtagListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  list-style-type: none;

  gap: 0.5rem;
`;

export const SideHashtagAnchor = styled.a`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: 0.25rem;
`;

export const SideHashtagList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  padding: 0.25rem 0.5rem;

  border-radius: 0.5rem;

  ${INTERACTION.default.normal()}
`;

export const SideHashtagText = styled.span<{ $variant?: boolean }>`
  ${TYPO.label1};
  color: ${semantic.light.object.solid.normal};
  text-align: center;

  ${({ $variant }) => {
    if ($variant) {
      return css`
        color: ${semantic.light.accent.solid.hero};
      `;
    }
  }}
`;

export const SideHashtagUsageText = styled.span`
  ${TYPO.label1};
  color: ${semantic.light.object.transparent.assistive};
`;
