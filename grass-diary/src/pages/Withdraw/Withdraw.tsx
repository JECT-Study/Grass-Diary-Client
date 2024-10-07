import * as S from '@styles/Withdraw/Withdraw.style';
import Container from '@components/Container';
import { WITHDRAW_MESSAGES, MODAL, CONSOLE_ERROR } from '@constants/message';
import { semantic } from '@styles/semantic';
import { INTERACTION } from '@styles/interaction';
import { useModal } from '@state/modal/useModal';
import API from '@services/index';
import { useNavigate } from 'react-router-dom';
import { END_POINT } from '@constants/api';

const Withdraw = () => {
  const { modal } = useModal();
  const navigate = useNavigate();

  const handleWithdraw = async () => {
    try {
      await API.delete(END_POINT.withdraw());
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.error(CONSOLE_ERROR.withdraw.delete + error);
    }
  };

  const handleModal = () => {
    const setting = {
      title: '회원 탈퇴',
      content: '서비스에서 탈퇴하시겠습니까?',
    };

    const button1 = {
      active: true,
      text: MODAL.cancel,
      interaction: INTERACTION.accent.subtle(),
    };

    const button2 = {
      active: true,
      text: '탈퇴하기',
      clickHandler: handleWithdraw,
      color: semantic.light.accent.solid.hero,
    };

    modal(setting, button1, button2);
  };

  return (
    <Container>
      <S.WithdrawContainer>
        <S.ContentContainer>
          <S.TitleSection>
            <S.TitleBox>
              <S.GrassLogo src="/assets/icons/logo.png" />
              <S.TitleText>{WITHDRAW_MESSAGES.title}</S.TitleText>
            </S.TitleBox>
            <S.WithdrawCautionBox>
              <S.CautionText>{WITHDRAW_MESSAGES.cautionText}</S.CautionText>
            </S.WithdrawCautionBox>
          </S.TitleSection>
          <S.DescriptionSection>
            <S.DescrptionBox>
              <ul>
                <S.DescrptionText>
                  {WITHDRAW_MESSAGES.description1}
                </S.DescrptionText>
                <S.DescrptionText>
                  {WITHDRAW_MESSAGES.description2}
                </S.DescrptionText>
                <S.DescrptionText>
                  {WITHDRAW_MESSAGES.description3}
                </S.DescrptionText>
                <S.DescrptionText>
                  {WITHDRAW_MESSAGES.description4}
                </S.DescrptionText>
                <S.DescrptionText>
                  {WITHDRAW_MESSAGES.description5}
                </S.DescrptionText>
                <S.DescrptionText>
                  {WITHDRAW_MESSAGES.description6}
                </S.DescrptionText>
              </ul>
            </S.DescrptionBox>
            <S.BottomBox>
              <S.AgreeCheckBox>
                <S.CheckBox type="checkbox" />
                <S.AgreeText>{WITHDRAW_MESSAGES.agreeText}</S.AgreeText>
              </S.AgreeCheckBox>
              <S.WithdrawButton onClick={handleModal}>
                {WITHDRAW_MESSAGES.withdrawButton}
              </S.WithdrawButton>
            </S.BottomBox>
          </S.DescriptionSection>
        </S.ContentContainer>
      </S.WithdrawContainer>
    </Container>
  );
};

export default Withdraw;
