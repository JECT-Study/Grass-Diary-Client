import * as S from '@styles/Main/TopSection.style';
import { Link, useNavigate } from 'react-router-dom';
import { useTodayDate } from '@hooks/api/useTodayDate';
import { useTodayQuestion } from '@hooks/api/useTodayQuestion';
import { CREATE_MESSAGES, MAIN_MESSAGES } from '@constants/message';
import { ReactComponent as EditNote } from '@svg/edit_note.svg';
import { ReactComponent as EventNote } from '@svg/event_note.svg';
import { useToast } from '@state/toast/useToast';

const TopSection = () => {
  // 질문 데이터를 가져오는 쿼리
  const { question } = useTodayQuestion();
  // 날짜 데이터를 가져오는 쿼리
  const { date } = useTodayDate();
  const { toast } = useToast();
  const navigate = useNavigate();

  const checkWritingPermission = () => {
    if (date) {
      const lastWritingDate = localStorage.getItem('lastWritingDate');
      const currentDate = `${date.year}년/${date.month}월/${date.date}일`;

      return lastWritingDate === currentDate
        ? toast(CREATE_MESSAGES.toast.already_written)
        : navigate('/creatediary');
    }
  };

  return (
    <>
      <S.Container>
        <S.TodayDateBox>
          {date ? (
            <p>
              {date.year}년 {date.month}월 {date.date}일 {date.day}요일
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </S.TodayDateBox>

        <S.DailyQuestionText>
          {question?.question ? (
            <>"{question.question}"</>
          ) : (
            <>"Question is Loading..."</>
          )}
        </S.DailyQuestionText>

        <S.ButtonContainer>
          <S.CreateDiaryBtn onClick={checkWritingPermission}>
            <S.CreateDiaryText>
              {MAIN_MESSAGES.top_section.write_diary}
            </S.CreateDiaryText>
            <EditNote />
          </S.CreateDiaryBtn>

          <S.MydiaryBtn>
            <Link to="/mypage">
              <S.MydiaryTxt>{MAIN_MESSAGES.top_section.my_diary}</S.MydiaryTxt>
            </Link>
            <EventNote />
          </S.MydiaryBtn>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
};

export default TopSection;
