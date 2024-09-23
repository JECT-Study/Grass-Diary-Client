interface TodayInfo {
  question: string;
  year: number;
  month: number;
  date: number;
  day: string;
}

type TodayDate = Omit<TodayInfo, 'question'>;
type TodayQuestion = Pick<TodayInfo, 'question'>;
