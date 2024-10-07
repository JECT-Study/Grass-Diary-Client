import styled, { css } from 'styled-components';

import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import { INTERACTION } from '@styles/interaction';

const SettingContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 20rem;
  gap: 1.5rem;

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(241, 241, 241, 0.3) 100%
    ),
    ${semantic.light.bg.solid.subtler};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  gap: 2.5rem;

  @media screen and (max-width: 60em) {
    gap: 1.5rem;
  }
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 60rem;

  gap: 4rem;
  padding: 1.25rem;
`;

const ProfileArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;

  position: relative;

  gap: 1rem;
  padding: 3rem 1.5rem;

  @media screen and (max-width: 60em) {
    padding: 3rem 0 0 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;

  gap: 4.5rem;

  @media screen and (max-width: 60em) {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 1.75rem;
  }
`;

const ProfileLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 0.6875rem;
`;

const AvatarImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 0.6875rem;
`;

const UserNameText = styled.span`
  align-self: stretch;
  text-align: center;

  ${TYPO.title2}
  color: ${semantic.light.object.solid.normal};
`;

const ProfileButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  width: 100%;
  gap: 1.125rem;
`;

const ImageUploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  height: 2.625rem;

  gap: 0.5rem;
  padding: 0.625rem 1rem;

  border-radius: 0.5rem;

  color: ${semantic.light.base.solid.white};
  background: ${semantic.light.accent.solid.normal};

  ${INTERACTION.default.normal(semantic.light.accent.solid.normal)}
`;

const ImageDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  height: 2.625rem;

  gap: 0.5rem;
  padding: 0.625rem 1rem;

  border-radius: 0.5rem;

  color: ${semantic.light.base.solid.white};
  background: ${semantic.light.object.solid.normal};

  ${INTERACTION.default.normal(semantic.light.object.solid.normal)}
`;

const ProfileRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 75%;
  height: 100%;

  gap: 0.625rem;
  padding: 1.25rem;

  @media screen and (max-width: 60em) {
    width: 100%;
    padding: 1.25rem 0;
  }
`;

const UserIntroductionContainer = styled.div`
  display: flex;
  align-self: stretch;

  gap: 4.5rem;
`;

const UserIntroductionBox = styled.div<{ isFocused: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 18.5rem;

  gap: 0.625rem;
  padding: 1.25rem;

  border-radius: 1rem;
  border: 1px solid
    ${({ isFocused }) =>
      isFocused
        ? semantic.light.accent.solid.alternative
        : semantic.light.border.transparent.assistive};

  box-shadow:
    0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  background: ${semantic.light.bg.solid.normal};
`;

const UserIntroduction = styled.textarea`
  flex-shrink: 0;
  align-self: stretch;

  height: 100%;

  border: none;
  resize: none;
  outline: none;

  ${TYPO.caption2}
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${semantic.light.object.transparent.neutral};
`;

const IntroductionCountText = styled.span`
  position: absolute;

  top: 23rem;
  right: 2.3rem;

  width: 4.375rem;

  ${TYPO.caption2};
  color: ${semantic.light.accent.solid.alternative};

  @media screen and (max-width: 60em) {
    top: 44.5rem;
    right: 0;
  }
`;

const DetailSettingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 60rem;
  width: 100%;

  gap: 3rem;
  padding: 1.25rem;

  @media screen and (max-width: 60em) {
    padding: 2.5rem 1.5rem;
  }
`;

const DetailSettingArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  gap: 1.5rem;
`;

const SettingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
`;

const SettingLeftBox = styled.div<{ $variant?: string }>`
  display: flex;
  align-items: center;

  gap: 4.3rem;

  ${({ $variant }) => {
    if ($variant === 'email') {
      return css`
        gap: 3.325rem;
      `;
    }

    if ($variant === 'nickname') {
      return css`
        gap: 5.725rem;
      `;
    }
  }}

  @media screen and (max-width: 60em) {
    gap: 2rem;

    ${({ $variant }) => {
      if ($variant === 'email') {
        return css`
          gap: 2rem;
        `;
      }

      if ($variant === 'nickname') {
        return css`
          gap: 4.4rem;
        `;
      }
    }}
  }

  @media screen and (max-width: 20em) {
    gap: 2rem;

    ${({ $variant }) => {
      if ($variant === 'email') {
        return css`
          gap: 0.8rem;
        `;
      }
    }}
  }
`;

const SettingLabel = styled.label`
  ${TYPO.title1}
  color: ${semantic.light.object.solid.normal};
`;

const SettingText = styled.span`
  ${TYPO.label2}
  color: ${semantic.light.object.solid.normal};
`;

const AmendButton = styled.button`
  ${TYPO.label2}
  color: ${semantic.light.accent.solid.alternative};
`;

const NicknameInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 41rem;
  height: 2.0625rem;

  padding: 1.3rem 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${semantic.light.border.transparent.alternative};
  background: #fff;

  &:focus {
    border: 1px solid ${semantic.light.accent.solid.alternative};
  }

  @media screen and (max-width: 60em) {
    flex-grow: 1;
    width: 60%;
  }

  @media screen and (max-width: 40em) {
    flex-grow: 1;
    width: 40%;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 7rem;
  height: 2.75rem;

  gap: 0.5rem;
  padding: 0.625rem 1rem;

  border-radius: 0.5rem;
  color: ${semantic.light.base.solid.white};
  background: ${semantic.light.accent.solid.normal};

  ${INTERACTION.default.normal(semantic.light.accent.solid.normal)}
`;

const SettingMessage = styled.span`
  align-self: stretch;

  ${TYPO.caption1};
  color: ${semantic.light.object.transparent.neutral};
`;

const DividerLine = styled.div`
  width: 100%;
  height: 0.0625rem;

  background: ${semantic.light.border.transparent.alternative};
`;

const NotificationBox = styled.div`
  display: flex;
  width: 100%;

  padding-bottom: 0.75rem;

  gap: 5rem;
`;

const NotificationLeftBox = styled.div``;

const NotificationRightBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4.125rem;
  padding-bottom: 0.75rem;
`;

const NotificationTypeBox = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.2rem;
  gap: 0.5rem;
`;

const NotificationText = styled.span`
  flex-shrink: 0;
  width: 12.9375rem;

  ${TYPO.label2};
  color: ${semantic.light.object.solid.normal};
`;

const NotificationToggle = styled.input``;

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 60rem;

  gap: 2.5rem 3rem;
  padding: 1rem 0rem;
`;

const ThemeMessageBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const ThemeSelectBox = styled.div`
  display: flex;
  gap: 2.5rem 3rem;
`;

const ThemeImg = styled.img`
  width: 6.5625rem;
  height: 6.5625rem;

  cursor: pointer;
`;

const WithdrawBoxArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 1.25rem;

  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const NavigateBox = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  cursor: pointer;
`;

const WithdrawButton = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const IntroductionButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  padding-top: 0.5rem;
  padding-right: 1.25rem;
`;

const ApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.3125rem;

  gap: 0.5rem;
  padding: 0.625rem 1rem;

  border-radius: 0.5rem;
  color: ${semantic.light.base.solid.white};
  background: ${semantic.light.accent.solid.normal};

  ${INTERACTION.default.normal(semantic.light.accent.solid.normal)}
`;

export {
  SettingContainer,
  ContentContainer,
  ProfileSection,
  DetailSettingSection,
  ProfileArticle,
  ProfileContainer,
  ProfileLeftContainer,
  ProfileRightContainer,
  AvatarContainer,
  AvatarImageBox,
  UserNameText,
  ProfileButtonBox,
  ImageUploadButton,
  ImageDeleteButton,
  UserIntroductionContainer,
  UserIntroductionBox,
  UserIntroduction,
  IntroductionCountText,
  DetailSettingArticle,
  SettingBox,
  SettingLeftBox,
  SettingLabel,
  SettingText,
  AmendButton,
  NicknameInput,
  SaveButton,
  SettingMessage,
  DividerLine,
  NotificationBox,
  NotificationLeftBox,
  NotificationRightBox,
  NotificationTypeBox,
  NotificationText,
  NotificationToggle,
  ThemeContainer,
  ThemeMessageBox,
  ThemeSelectBox,
  ThemeImg,
  WithdrawBoxArticle,
  NavigateBox,
  WithdrawButton,
  ApplyButton,
};
