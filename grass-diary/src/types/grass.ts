interface Grass {
  createdAt: string;
  transparency: number;
}

interface GrassInfo {
  grassList: Grass[];
  colorRGB: string;
}

interface GrassApiResponse {
  totalCount: number;
  thisMonthCount: number;
  grassInfoDTO: GrassInfo;
}

interface RewardPointResponse {
  rewardPoint: number;
}
