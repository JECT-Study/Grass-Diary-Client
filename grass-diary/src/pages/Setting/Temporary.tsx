import * as S from '../../styles/Setting/SettingStyles';

const Temporary = () => {
  return (
    <S.NotificationBox>
      <S.NotificationLeftBox>
        <S.SettingLabel>알림 설정</S.SettingLabel>
      </S.NotificationLeftBox>
      <S.NotificationRightBox>
        <S.NotificationTypeBox>
          <S.NotificationText>내가 작성한 글의 댓글 알림</S.NotificationText>
          <S.NotificationToggle role="switch" type="checkbox" />
        </S.NotificationTypeBox>
        <S.NotificationTypeBox>
          <S.NotificationText>
            누군가 나를 팔로우했을 때 알림
          </S.NotificationText>
          <S.NotificationToggle role="switch" type="checkbox" />
        </S.NotificationTypeBox>
        <S.NotificationTypeBox>
          <S.NotificationText>잔디 일기 업데이트 시 알림</S.NotificationText>
          <S.NotificationToggle role="switch" type="checkbox" />
        </S.NotificationTypeBox>
      </S.NotificationRightBox>
    </S.NotificationBox>
  );
};

export default Temporary;
