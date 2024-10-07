import { END_POINT } from '@constants/api';
import { CONSOLE_ERROR } from '@constants/message';
import API from '@services/index';
import { useQuery } from '@tanstack/react-query';
import { useUser } from '@state/user/useUser';
import { AxiosError } from 'axios';

export const useRewardHistory = () => {
  const memberId = useUser();

  const fetchUseRewardHistory = async (): Promise<RewardHistory[]> => {
    const res = await API.get(END_POINT.reward_history(memberId));
    return res.data;
  };

  const {
    data: history,
    isError,
    error,
  } = useQuery<
    RewardHistory[],
    AxiosError,
    RewardHistory[],
    [string, number | undefined]
  >({
    queryKey: ['rewardHistory', memberId],
    queryFn: fetchUseRewardHistory,
    enabled: !!memberId,
  });

  if (isError) console.error(CONSOLE_ERROR.reward.get + error.message);

  return { history };
};
