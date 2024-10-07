import { useEffect } from 'react';
import { useUser } from '../user/useUser';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useQuery } from '@tanstack/react-query';
import { CONSOLE_ERROR } from '@constants/message';
import {
  useNickname,
  useProfileActions,
  useProfileImageURL,
  useProfileIntro,
  useEmail,
} from './ProfileStore';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

const fetchAxios = async (memberId: Id) => {
  const res = await API.get(END_POINT.member_profile(memberId));
  return res.data;
};

export const useProfile = () => {
  const memberId = useUser();
  const { setProfileImageURL, setNickName, setProfileIntro, setEmail } =
    useProfileActions();

  const email = useEmail();
  const { renderErrorPage } = useError();
  const nickname = useNickname();
  const profileIntro = useProfileIntro();
  const profileImageURL = useProfileImageURL();

  const { data, isSuccess, isError, error } = useQuery<
    IProfile,
    AxiosError<ApiErrorResponse>
  >({
    queryKey: ['profile'],
    queryFn: () => fetchAxios(memberId),
    enabled: !!memberId,
  });

  useEffect(() => {
    if (isError) {
      console.error(CONSOLE_ERROR.profile.get + error);
      renderErrorPage(error);
    }

    if (isSuccess) {
      setProfileImageURL(data.profileImageURL);
      setNickName(data.nickname);
      setProfileIntro(data.profileIntro);
      setEmail(data.email);
    }
  }, [isError, isSuccess]);

  return { profileImageURL, nickname, profileIntro, email };
};
