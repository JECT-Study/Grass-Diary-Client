import * as S from '@styles/Main/BottomSection.style';
import AnimateReward from './AnimateReward';

import { semantic } from '@styles/semantic';
import { useReward } from '@hooks/api/useReward';
import { useModal } from '@state/modal/useModal';
import { MAIN_MESSAGES, MODAL } from '@constants/message';
import { ReactComponent as Avatar } from '@svg/avatarBg.svg';
import { ReactComponent as Arrow } from '@svg/chevron_right.svg';
import { ReactComponent as ArrowBlack } from '@svg/chevron_right_black.svg';

const BottomSection = () => {
  const { reward } = useReward();
  const { modal } = useModal();

  const themeModal = () => {
    const setting = {
      title: MODAL.main.modal.preparation_notice,
      content: MODAL.main.modal.modal_notice('테마 상점은'),
    };

    const button1 = {
      active: true,
      text: MODAL.confirm,
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  const reviewModal = () => {
    const setting = {
      title: MODAL.main.modal.preparation_notice,
      content: MODAL.main.modal.modal_notice('한 달 일기 회고는'),
    };

    const button1 = {
      active: true,
      text: MODAL.confirm,
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  return (
    <>
      <S.Section>
        <S.Container>
          <S.Card>
            <S.CardText>{MAIN_MESSAGES.bottom_section.my_reward}</S.CardText>
            <S.CardSubText>
              {MAIN_MESSAGES.bottom_section.reward_message}
            </S.CardSubText>
            <S.Divider />
            <S.Wrap>
              <S.RewardContainer>
                <Avatar />
                <S.RewardPointBox>
                  <AnimateReward n={reward?.rewardPoint ?? 0} />
                </S.RewardPointBox>
              </S.RewardContainer>
              <S.ThemeMarketBtn onClick={themeModal}>
                <S.ThemeMarketText>
                  {MAIN_MESSAGES.bottom_section.theme_store}
                </S.ThemeMarketText>
                <Arrow
                  width={18}
                  height={18}
                  fill={semantic.light.accent.solid.hero}
                ></Arrow>
              </S.ThemeMarketBtn>
            </S.Wrap>
          </S.Card>
          <S.Card>
            <S.CardText>
              {MAIN_MESSAGES.bottom_section.monthly_diary_review}
            </S.CardText>
            <S.CardSubText>
              {MAIN_MESSAGES.bottom_section.review_description}
            </S.CardSubText>
            <S.Divider />
            <S.RetrospectContainer>
              <S.RetrospectBtn onClick={reviewModal}>
                <S.RetrospectText>
                  {MAIN_MESSAGES.bottom_section.go_to_review}
                </S.RetrospectText>
                <ArrowBlack></ArrowBlack>
              </S.RetrospectBtn>
            </S.RetrospectContainer>
          </S.Card>
        </S.Container>
      </S.Section>
    </>
  );
};

export default BottomSection;
