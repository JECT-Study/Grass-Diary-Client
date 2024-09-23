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
} from './ProfileStore';

const fetchAxios = async (memberId: Id) => {
  const res = await API.get(END_POINT.member_profile(memberId));
  return res.data;
};

export const useProfile = () => {
  const memberId = useUser();
  const { setProfileImageURL, setNickName, setProfileIntro } =
    useProfileActions();
  const profileImageURL = useProfileImageURL();
  const nickname = useNickname();
  const profileIntro = useProfileIntro();

  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchAxios(memberId),
    enabled: !!memberId,
  });

  useEffect(() => {
    if (isError) console.error(CONSOLE_ERROR.profile.get + error);
    if (isSuccess) {
      setProfileImageURL(data.profileImageURL);
      setNickName(data.nickname);
      setProfileIntro(data.profileIntro);
    }
  }, [isError, isSuccess]);

  return { profileImageURL, nickname, profileIntro };
};
