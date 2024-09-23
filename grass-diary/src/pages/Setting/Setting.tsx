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
import { CONSOLE_ERROR, SETTING_MESSAGES } from '@constants/message';
import { useProfile } from '@state/profile/useProfile';
import { useProfileActions } from '@state/profile/ProfileStore';

const Setting = () => {
  const queryClient: QueryClient = useQueryClient();
  const { nickname, profileIntro }: omitProfileImageURL = useProfile();
  const { setNickName, setProfileIntro } = useProfileActions();

  const [isFocused, setIsFocused] = useState(false);
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [editNickname, setEditNickname] = useState(nickname);

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
    Error,
    omitProfileImageURL
  >({
    mutationFn: profileInfo =>
      API.patch(END_POINT.edit_member_info, profileInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profileInfo'] });
      setIsEditingNickname(false);
      setNickName(editNickname);
    },
    onError: error => console.error(CONSOLE_ERROR.member.patch + error),
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
                    <S.ImageUploadButton>
                      {SETTING_MESSAGES.button.image('업로드')}
                    </S.ImageUploadButton>
                    <S.ImageDeleteButton>
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
          </S.ProfileArticle>
        </S.ProfileSection>
        <S.DetailSettingSection>
          <S.DetailSettingArticle>
            <S.SettingBox>
              <S.SettingLeftBox>
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
                <S.SettingText>username@gmail.com</S.SettingText>
              </S.SettingLeftBox>
            </S.SettingBox>
            <S.SettingMessage>
              {SETTING_MESSAGES.message.email}
            </S.SettingMessage>
          </S.DetailSettingArticle>
          {/* <S.DividerLine />
          <Temporary /> */}
          <S.DividerLine />
          <S.ThemeContainer>
            <S.ThemeMessageBox>
              <S.SettingLabel>{SETTING_MESSAGES.label.theme}</S.SettingLabel>
              <S.SettingMessage>
                {SETTING_MESSAGES.message.theme}
              </S.SettingMessage>
            </S.ThemeMessageBox>
            <S.ThemeSelectBox>
              <S.ThemeImg src="/assets/icons/darkTheme.svg" />
              <S.ThemeImg src="/assets/icons/lightTheme.svg" />
            </S.ThemeSelectBox>
          </S.ThemeContainer>
          <S.DividerLine />
          <S.WithdrawBoxArticle>
            <S.WithdrawBox>
              <S.SettingLabel>{SETTING_MESSAGES.label.withdraw}</S.SettingLabel>
              <S.WithdrawButton>
                {SETTING_MESSAGES.button.withdraw}
              </S.WithdrawButton>
            </S.WithdrawBox>
            <S.SettingMessage>
              {SETTING_MESSAGES.message.withdraw}
            </S.SettingMessage>
          </S.WithdrawBoxArticle>
          <S.BottomSection>
            <S.ApplyButton
              onClick={() =>
                updateProfile.mutate({
                  nickname: nickname,
                  profileIntro: profileIntro,
                })
              }
            >
              {SETTING_MESSAGES.button.apply}
            </S.ApplyButton>
            <S.NavigateButton>
              {SETTING_MESSAGES.button.navigate}
              <img src="/assets/icons/button-outlined-chevron-right.svg" />
            </S.NavigateButton>
          </S.BottomSection>
        </S.DetailSettingSection>
      </S.ContentContainer>
    </S.SettingContainer>
  );
};

export default Setting;
