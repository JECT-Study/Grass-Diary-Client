interface RewardHistory {
  historyId: number;
  rewardType: string;
  rewardPoint: number;
  rewardedDate: string;
}

interface GroupedHistory {
  [key: string]: {
    year: string;
    month: number;
    records: RewardHistory[];
  };
}
