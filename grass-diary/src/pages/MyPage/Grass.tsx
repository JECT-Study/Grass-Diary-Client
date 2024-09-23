import * as S from '../../styles/MyPage/MyStyles';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { formatDate, getDaysArray } from '@utils/dateUtils';
import useGrass from '@hooks/api/useGrass';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { useUser } from '@state/user/useUser';
import { semantic } from '@styles/semantic';

type TCreateGrass = () => { year: number; grass: (Date | null)[][] };

const createGrass: TCreateGrass = () => {
  const year: number = new Date().getFullYear();
  const days: Date[] = getDaysArray(year);
  const columns: number = Math.ceil(days.length / 7);

  // 1년을 7으로 나눈 수만큼 잔디 배열 생성 (default: null)
  const grass: (Date | null)[][] = Array.from({ length: columns }, () =>
    Array(7).fill(null),
  );

  // 잔디 배열에 해당하는 날짜 저장
  days.forEach((day, index) => {
    const column: number = Math.floor(index / 7);
    const row: number = index % 7;

    grass[column][row] = day;
  });

  return { year, grass };
};

interface IGrass {
  setSelectedDiary: React.Dispatch<React.SetStateAction<IDiary[] | undefined>>;
}

const Grass = ({ setSelectedDiary }: IGrass) => {
  const memberId = useUser();
  const grassColors = useGrass(memberId);
  const { year, grass } = createGrass();

  const [selectedGrass, setSelectedGrass] = useState<string | null>(null);
  const [hoveredGrass, setHoveredGrass] = useState<string | null>(null);

  const handleGrassHover = (date: Date | null) => {
    const formattedDate = date ? formatDate(date) : null;
    if (formattedDate !== hoveredGrass) {
      setHoveredGrass(formattedDate);
    }
  };

  const handleGrassClick = (date: Date | null) => {
    const formattedDate = formatDate(date);
    if (formattedDate === selectedGrass) {
      setSelectedGrass(null);
    } else {
      setSelectedGrass(formattedDate);
    }
  };

  const selectedDate: string | null = selectedGrass
    ? `${year}-${selectedGrass.split('/').join('-')}`
    : null;

  const { data: selectedDiary } = useQuery<
    IDiary,
    Error,
    IDiary,
    (string | number | string | null)[]
  >({
    queryKey: ['selectedDiary', memberId, selectedDate],
    queryFn: () =>
      API.get(END_POINT.search_date(memberId, selectedDate)).then(
        ({ data }) => data,
      ),
    enabled: !!selectedGrass && !!memberId,
  });

  useEffect(() => {
    if (selectedDiary) setSelectedDiary([selectedDiary]);
    if (!selectedDiary) setSelectedDiary(undefined);
  }, [selectedDiary]);

  return (
    <S.GrassContainer>
      {grass.map((column, index) => (
        <S.GrassBox key={index}>
          {column.map((day, index) => {
            if (!day) return null;
            const writeDay = formatDate(day);
            const isHovered = writeDay === hoveredGrass;
            const isSelected = writeDay === selectedGrass;

            return (
              <S.DaysBox key={index}>
                {grassColors && (
                  <S.GrassDateBox
                    onClick={() => handleGrassClick(day)}
                    onMouseOver={() => handleGrassHover(day)}
                    onMouseOut={() => handleGrassHover(null)}
                    $border={
                      !writeDay
                        ? `1px solid ${semantic.light.accent.solid.normal}`
                        : `1px solid ${semantic.light.border.transparent.alternative}`
                    }
                    $background={
                      grassColors[writeDay]
                        ? `rgba(${grassColors[writeDay]})`
                        : `${semantic.light.fill.transparent.assistive}`
                    }
                  />
                )}
                {(isHovered || isSelected) && (
                  <S.DateBubbleBox>
                    <span>{isHovered ? hoveredGrass : selectedGrass}</span>
                  </S.DateBubbleBox>
                )}
              </S.DaysBox>
            );
          })}
        </S.GrassBox>
      ))}
    </S.GrassContainer>
  );
};

export default Grass;
