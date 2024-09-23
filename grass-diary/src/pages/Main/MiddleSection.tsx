import * as S from '@styles/Main/MiddleSection.style';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useGrassRecord } from '@hooks/api/useGrassRecord';
import { MAIN_MESSAGES } from '@constants/message';

const MiddleSection = () => {
  // 잔디 날짜 계산
  const currentDate = dayjs();
  const currentMonth = currentDate.format('M');
  const nextMonthFirstDay = currentDate.add(1, 'month').startOf('month');
  const currentMonthLastDay = nextMonthFirstDay.subtract(1, 'day');
  const { grassQuery } = useGrassRecord();

  const getGrassStyle = useCallback(
    (day: number | string) => {
      const grass = grassQuery?.grassInfoDTO.grassList.find(
        g => dayjs(g.createdAt).format('D') == day,
      );
      if (grass) {
        return {
          backgroundColor: `rgb(${grassQuery?.grassInfoDTO.colorRGB})`,
          opacity: grass.transparency,
          borderRadius: '0.75rem',
        };
      }
      return {};
    },
    [grassQuery],
  );

  const daysInMonth = Array.from(
    { length: currentMonthLastDay.date() },
    (_, i) => i + 1,
  );

  const weeksInMonth: number[][] = [];
  let week: number[] = [];

  daysInMonth.forEach((day, index) => {
    week.push(day);
    if ((index + 1) % 7 === 0 || index === daysInMonth.length - 1) {
      weeksInMonth.push(week);
      week = [];
    }
  });

  return (
    <>
      <S.Container>
        <S.GrassLabel>
          <S.GrassLabelText>
            {MAIN_MESSAGES.middle_section.status_label}
          </S.GrassLabelText>
        </S.GrassLabel>

        <S.GrassBanner>
          <S.GrassBannerText>
            {currentMonth}
            {MAIN_MESSAGES.middle_section.monthly_grass_summary}
            <S.HighlightedText>
              {grassQuery?.thisMonthCount ? grassQuery?.thisMonthCount : 0}
            </S.HighlightedText>
            {MAIN_MESSAGES.middle_section.planted_grass_count}
          </S.GrassBannerText>
          <S.GrassBannerTextSecond>
            {MAIN_MESSAGES.middle_section.grass_prompt}
          </S.GrassBannerTextSecond>
        </S.GrassBanner>

        <S.GrassTableBox>
          {daysInMonth.map(day => (
            <div key={day} style={getGrassStyle(day)}>
              <S.DayBox></S.DayBox>
            </div>
          ))}
        </S.GrassTableBox>
      </S.Container>
    </>
  );
};

export default MiddleSection;
