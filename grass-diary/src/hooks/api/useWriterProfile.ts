import { useQuery } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { AxiosError } from 'axios';

const fetchUserProfiles = (memberId: Id) => {
  return API.get(END_POINT.member_profile(memberId));
};

export const useWriterProfile = (writerId: Id) => {
  return useQuery<IProfile, AxiosError, IProfile, [string, Id]>({
    queryKey: ['writer-data', writerId],
    queryFn: async () => {
      const res = await fetchUserProfiles(writerId);
      return res.data;
    },
    enabled: !!writerId,
  });
};
