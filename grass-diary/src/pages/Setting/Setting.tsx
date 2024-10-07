import React, { useState } from 'react';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import * as S from '../../styles/Setting/SettingStyles';
import API from '@services/index';
import { Profile } from '@components/index';
import { END_POINT } from '@constants/api';
import { MODAL, SETTING_MESSAGES } from '@constants/message';
import { useProfile } from '@state/profile/useProfile';
import { useProfileActions } from '@state/profile/ProfileStore';
import { Link } from 'react-router-dom';
import { useModal } from '@state/modal/useModal';
import { INTERACTION } from '@styles/interaction';
import { semantic } from '@styles/semantic';
import { AxiosError } from 'axios';

const Setting = () => {
  const queryClient: QueryClient = useQueryClient();
  const { nickname, profileIntro, email }: omitProfileImageURL = useProfile();
  const { setNickName, setProfileIntro } = useProfileActions();
  const { modal } = useModal();

  const [isFocused, setIsFocused] = useState(false);
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [editNickname, setEditNickname] = useState(nickname);

  const handleModal = (content: string) => {
    const setting = {
      title: MODAL.main.modal.preparation_notice,
      content: content,
    };

    const button1 = {
      active: true,
      text: MODAL.confirm,
      color: semantic.light.accent.solid.hero,
      interaction: INTERACTION.accent.subtle(),
    };

    modal(setting, button1);
  };

  const handleChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditNickname(event.target.value);
  };

  const handleChangeProfileIntro = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    if (value.length <= 150) setProfileIntro(value);
  };

  const updateProfile = useMutation<
    omitProfileImageURL,
    AxiosError<ApiErrorResponse>,
    omitProfileImageURL
  >({
    mutationFn: profileInfo =>
      API.patch(END_POINT.edit_member_info, profileInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profileInfo'] });
      setIsEditingNickname(false);
      setNickName(editNickname);
    },
  });

  return (
    <S.SettingContainer>
      <S.ContentContainer>
        <S.ProfileSection>
          <S.ProfileArticle>
            <S.ProfileContainer>
              <S.ProfileLeftContainer>
                <S.AvatarContainer>
                  <S.AvatarImageBox>
                    <Profile />
                    <S.UserNameText>{nickname}</S.UserNameText>
                  </S.AvatarImageBox>
                  <S.ProfileButtonBox>
                    <S.ImageUploadButton
                      onClick={() =>
                        handleModal(
                          MODAL.main.modal.modal_notice('프로필 변경 기능'),
                        )
                      }
                    >
                      {SETTING_MESSAGES.button.image('업로드')}
                    </S.ImageUploadButton>
                    <S.ImageDeleteButton
                      onClick={() =>
                        handleModal(
                          MODAL.main.modal.modal_notice('프로필 변경 기능'),
                        )
                      }
                    >
                      {SETTING_MESSAGES.button.image('삭제')}
                    </S.ImageDeleteButton>
                  </S.ProfileButtonBox>
                </S.AvatarContainer>
              </S.ProfileLeftContainer>
              <S.ProfileRightContainer>
                <S.UserIntroductionContainer>
                  <S.UserIntroductionBox isFocused={isFocused}>
                    <S.UserIntroduction
                      name="profileIntro"
                      value={profileIntro || ''}
                      onChange={handleChangeProfileIntro}
                      placeholder={SETTING_MESSAGES.placeholder.introduction}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                  </S.UserIntroductionBox>
                </S.UserIntroductionContainer>
              </S.ProfileRightContainer>
            </S.ProfileContainer>
            <S.IntroductionCountText>
              {profileIntro.length}/150자
            </S.IntroductionCountText>
            <S.IntroductionButtonBox>
              <S.ApplyButton
                onClick={() =>
                  updateProfile.mutate({
                    profileIntro: profileIntro,
                    nickname,
                    email,
                  })
                }
              >
                {SETTING_MESSAGES.button.save}
              </S.ApplyButton>
            </S.IntroductionButtonBox>
          </S.ProfileArticle>
        </S.ProfileSection>
        <S.DetailSettingSection>
          <S.DetailSettingArticle>
            <S.SettingBox>
              <S.SettingLeftBox $variant="nickname">
                <S.SettingLabel>
                  {SETTING_MESSAGES.label.nickname}
                </S.SettingLabel>
                {isEditingNickname ? (
                  <S.NicknameInput
                    placeholder={nickname}
                    value={editNickname}
                    onChange={handleChangeNickname}
                    maxLength={8}
                  />
                ) : (
                  <S.SettingText>{nickname}</S.SettingText>
                )}
              </S.SettingLeftBox>
              {isEditingNickname ? (
                <S.SaveButton
                  onClick={() =>
                    updateProfile.mutate({
                      nickname: editNickname,
                      profileIntro,
                      email,
                    })
                  }
                >
                  {SETTING_MESSAGES.button.save}
                </S.SaveButton>
              ) : (
                <S.AmendButton onClick={() => setIsEditingNickname(true)}>
                  {SETTING_MESSAGES.button.amend}
                </S.AmendButton>
              )}
            </S.SettingBox>
            <S.SettingMessage>
              {SETTING_MESSAGES.message.nickname}
            </S.SettingMessage>
            <S.DividerLine />
          </S.DetailSettingArticle>
          <S.DetailSettingArticle>
            <S.SettingBox>
              <S.SettingLeftBox $variant="email">
                <S.SettingLabel>{SETTING_MESSAGES.label.email}</S.SettingLabel>
                <S.SettingText>{email}</S.SettingText>
              </S.SettingLeftBox>
            </S.SettingBox>
            <S.SettingMessage>
              {SETTING_MESSAGES.message.email}
            </S.SettingMessage>
          </S.DetailSettingArticle>
          {/* <S.DividerLine />
          <Temporary /> */}
          <S.DividerLine />
          <S.DetailSettingArticle>
            <S.NavigateBox>
              <S.SettingLabel>{SETTING_MESSAGES.label.theme}</S.SettingLabel>
              <Link to="/themesetting">
                <S.WithdrawButton src="/assets/icons/icon-btn-chevron-right.svg" />
              </Link>
            </S.NavigateBox>
            <S.SettingMessage>
              {SETTING_MESSAGES.message.theme}
            </S.SettingMessage>
          </S.DetailSettingArticle>
          <S.DividerLine />
          <S.ThemeContainer>
            <S.ThemeMessageBox>
              <S.SettingLabel>{SETTING_MESSAGES.label.mode}</S.SettingLabel>
              <S.SettingMessage>
                {SETTING_MESSAGES.message.mode}
              </S.SettingMessage>
            </S.ThemeMessageBox>
            <S.ThemeSelectBox>
              <S.ThemeImg src="/assets/icons/darkTheme.svg" />
              <S.ThemeImg src="/assets/icons/lightTheme.svg" />
            </S.ThemeSelectBox>
          </S.ThemeContainer>
          <S.DividerLine />
          <S.WithdrawBoxArticle>
            <S.NavigateBox>
              <S.SettingLabel>{SETTING_MESSAGES.label.withdraw}</S.SettingLabel>
              <a href="/withdraw">
                <S.WithdrawButton src="/assets/icons/icon-btn-chevron-right.svg" />
              </a>
            </S.NavigateBox>
          </S.WithdrawBoxArticle>
        </S.DetailSettingSection>
      </S.ContentContainer>
    </S.SettingContainer>
  );
};

export default Setting;
