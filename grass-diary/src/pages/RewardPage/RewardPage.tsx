import * as S from '@styles/RewardPage/RewardPage.style';
import { semantic } from '@styles/semantic';
import { ReactComponent as Avatar } from '@svg/avatarBg.svg';
import { ReactComponent as Arrow } from '@svg/chevron_right.svg';
import { useReward } from '@hooks/api/useReward';
import { useGrassRecord } from '@hooks/api/useGrassRecord';
import { useRewardHistory } from '@hooks/api/useRewardHistory';
import { Link } from 'react-router-dom';

const RewardPage = () => {
  const { reward } = useReward();
  const { grassQuery } = useGrassRecord();
  const { history } = useRewardHistory();

  const groupedHistory: GroupedHistory | undefined = history?.reduce(
    (acc: GroupedHistory, rewardHistory: RewardHistory) => {
      const [date] = rewardHistory.rewardedDate.split(' ');
      const [year, month] = date.split('-');

      const key = `${year}-${month}`;
      if (!acc[key]) {
        acc[key] = {
          year,
          month: parseInt(month, 10),
          records: [],
        };
      }
      acc[key].records.push(rewardHistory);
      return acc;
    },
    {} as GroupedHistory,
  );

  return (
    <>
      <S.Background>
        <S.Layout>
          <S.TitleContainer>
            <S.RewardTitle>리워드 내역</S.RewardTitle>
            <S.RewardSubTitle>
              내가 쌓은 포인트를 확인할 수 있어요
            </S.RewardSubTitle>
          </S.TitleContainer>
          <S.RewardSection>
            <S.RewardContainer>
              <S.GrassCountBox>
                <img src="../src/assets/image/pot.png" alt="image" />
                <S.CountText>{grassQuery?.totalCount}</S.CountText>
                <S.CountCaptionText>내가 심은 잔디</S.CountCaptionText>
              </S.GrassCountBox>
              <S.GrassRewardBox>
                <Avatar />
                <S.TotalRewardText>{reward.rewardPoint}</S.TotalRewardText>
                <S.TotalRewardCaptionText>
                  내 잔디 리워드
                </S.TotalRewardCaptionText>
              </S.GrassRewardBox>
            </S.RewardContainer>
            <Link to="/themepage">
              <S.ThemeBtn>
                <S.ThemeBtnText>테마 상점</S.ThemeBtnText>
                <Arrow
                  width={18}
                  height={18}
                  fill={semantic.light.accent.solid.hero}
                />
              </S.ThemeBtn>
            </Link>
          </S.RewardSection>
          <S.HistorySection>
            <S.DayContainer>
              <S.DayBox>
                <S.DayTextBox>
                  <S.DayText>날짜</S.DayText>
                </S.DayTextBox>
                <S.GetRewardText>획득 리워드</S.GetRewardText>
              </S.DayBox>
              <S.DividerBox>
                <S.Divider />
              </S.DividerBox>
            </S.DayContainer>

            {groupedHistory &&
              Object.values(groupedHistory)
                .slice()
                .reverse()
                .map(
                  (group: {
                    year: string;
                    month: number;
                    records: RewardHistory[];
                  }) => (
                    <S.RewardListContainer key={`${group.year}-${group.month}`}>
                      <S.HistoryYearMonthTextBox>
                        <S.HistoryYearMonthText>
                          {`${group.year}년 ${group.month}월`}
                        </S.HistoryYearMonthText>
                      </S.HistoryYearMonthTextBox>
                      <S.RewardListBox>
                        {group.records
                          .slice()
                          .reverse()
                          .map(rewardHistory => {
                            const [date] =
                              rewardHistory.rewardedDate.split(' ');
                            const [, , day] = date.split('-');
                            return (
                              <S.RewardList key={rewardHistory.historyId}>
                                <S.RewardDate>
                                  <S.RewardDateText>
                                    {`${group.month}월 ${parseInt(day, 10)}일`}
                                  </S.RewardDateText>
                                </S.RewardDate>
                                <S.RewardPoint>
                                  <Avatar />
                                  <S.RewardPointText>
                                    {rewardHistory.rewardPoint < 0
                                      ? rewardHistory.rewardPoint
                                      : `+${rewardHistory.rewardPoint}`}
                                  </S.RewardPointText>
                                </S.RewardPoint>
                              </S.RewardList>
                            );
                          })}
                      </S.RewardListBox>
                      <S.DividerBox>
                        <S.Divider />
                      </S.DividerBox>
                    </S.RewardListContainer>
                  ),
                )}
          </S.HistorySection>
        </S.Layout>
      </S.Background>
    </>
  );
};

export default RewardPage;
