import * as S from '@styles/ThemePage/ThemePage.style';
import * as SMB from '@styles/Main/BottomSection.style';
import AnimateReward from '@pages/Main/AnimateReward';
import { semantic } from '@styles/semantic';
import { ReactComponent as Arrow } from '@svg/chevron_right.svg';
import { ReactComponent as Avatar } from '@svg/avatarBg.svg';
import { ReactComponent as Navigate } from '@svg/navigate_next.svg';
import { MAIN_MESSAGES } from '@constants/message';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReward } from '@hooks/api/useReward';
import { useUser } from '@state/user/useUser';
import { useTheme } from '@hooks/api/useTheme';
import { useGrassRecord } from '@hooks/api/useGrassRecord';
import { useModal } from '@state/modal/useModal';

const ThemeStorePage = () => {
  const { reward } = useReward();
  const { modal } = useModal();
  const memberId = useUser();
  const { grassQuery } = useGrassRecord();
  const { mutate: purchaseTheme } = useTheme();
  const [selectedColor, setSelectedColor] = useState<string>(
    `rgb(${grassQuery?.grassInfoDTO.colorRGB})` || '',
  );
  const [selectedColorName, setSelectedColorName] = useState<string>('');
  const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
  const [previewBoxes, setPreviewBoxes] = useState(
    () => Math.floor(Math.random() * 30) + 1,
  );
  const previewDays = 31;
  const themePrice = 490;

  useEffect(() => {
    if (grassQuery) {
      setSelectedColor(`rgb(${grassQuery?.grassInfoDTO.colorRGB})`);
    }
  }, [grassQuery]);

  const handleColorClick = useCallback(
    (color: string, name: string, id: number) => {
      setSelectedColor(color);
      setSelectedColorName(name);
      setSelectedColorId(id);
      setPreviewBoxes(Math.floor(Math.random() * 30) + 1);
    },
    [],
  );

  useEffect(() => {}, [previewBoxes]);

  const boxes = Array.from({ length: previewDays }, (_, index) => {
    const isAccent = index < previewBoxes;

    const backgroundColor = isAccent
      ? semantic.light.accent.solid.alternative
      : semantic.light.fill.transparent.assistive;

    if (selectedColor) {
      const backgroundColor = isAccent
        ? selectedColor
        : semantic.light.fill.transparent.assistive;
      return <S.Box key={index} backgroundColor={backgroundColor} />;
    }

    return <S.Box key={index} backgroundColor={backgroundColor} />;
  });

  const handleClick = () => window.scrollTo(0, 0);

  const alreadyModal = () => {
    const setting = {
      title: '테마 색상',
      content: `이미 구매하신 색상이에요.\n다른 색상을 골라 보세요!`,
    };
    const button1 = {
      active: true,
      text: '확인',
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  const selectModal = () => {
    const setting = {
      title: '테마 색상',
      content: `색상을 선택해 주세요!`,
    };
    const button1 = {
      active: true,
      text: '확인',
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  const notEnoughModal = () => {
    const setting = {
      title: '포인트 부족',
      content: `포인트가 부족해요.\n일기를 써서 포인트를 얻어보세요!`,
    };
    const button1 = {
      active: true,
      text: '확인',
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  const completedModal = () => {
    const setting = {
      title: '구입 완료!',
      content: `설정-테마 변경 페이지에서\n테마를 변경할 수 있어요.`,
    };
    const button1 = {
      active: true,
      text: '확인',
      color: semantic.light.accent.solid.alternative,
      clickHandler: () => {
        window.location.reload();
      },
    };
    modal(setting, button1);
  };

  const handlePurchase = useCallback(() => {
    if (selectedColorId === null) {
      selectModal();
      return;
    }

    if (reward.rewardPoint < themePrice) {
      notEnoughModal();
      return;
    }

    purchaseTheme(
      {
        memberId,
        colorCodeId: selectedColorId,
        colorName: selectedColorName,
        rgb: selectedColor,
      },
      {
        onError: error => {
          if (
            error.response.data.status === 409 &&
            error.response.data.code === 'COLOR_ALREADY_PURCHASED_ERR'
          ) {
            alreadyModal();
          } else {
            alert(`구매 중 오류가 발생했습니다: ${error.description}`);
          }
          console.log(error);
        },
        onSuccess: () => {
          completedModal();
        },
      },
    );
  }, [
    memberId,
    purchaseTheme,
    selectedColor,
    selectedColorId,
    selectedColorName,
  ]);

  return (
    <>
      <S.Layout>
        <S.ThemeTitleBox>
          <Link to="/themesetting">
            <S.ThemeStoreBtn>
              <S.ThemeStoreBtnText>
                테마 설정 페이지로 이동하기
              </S.ThemeStoreBtnText>
              <Arrow
                width={18}
                height={18}
                fill={semantic.light.accent.solid.hero}
              />
            </S.ThemeStoreBtn>
          </Link>
        </S.ThemeTitleBox>

        <S.ThemeTitle>테마 상점</S.ThemeTitle>

        <S.ThemeSubTitleBox>
          <S.ThemeSubTitle>
            잔디 포인트로 다양한 테마를 구입해 보세요!
          </S.ThemeSubTitle>
        </S.ThemeSubTitleBox>

        <SMB.Card>
          <S.RewardTitleBox>
            <SMB.CardText>
              {MAIN_MESSAGES.bottom_section.my_reward}
            </SMB.CardText>
            <Link to="/rewardpage">
              <S.RewardPageBtn onClick={handleClick}>
                <S.RewardBtnText>리워드 내역</S.RewardBtnText>
                <Navigate />
              </S.RewardPageBtn>
            </Link>
          </S.RewardTitleBox>
          <SMB.CardSubText>
            {MAIN_MESSAGES.bottom_section.reward_message}
          </SMB.CardSubText>
          <SMB.Divider />
          <SMB.Wrap>
            <SMB.RewardContainer>
              <Avatar />
              <SMB.RewardPointBox>
                <AnimateReward n={reward?.rewardPoint ?? 0} />
              </SMB.RewardPointBox>
            </SMB.RewardContainer>
          </SMB.Wrap>
        </SMB.Card>

        <S.ThemePreviewContainer>
          <S.ThemePreviewTextBox>
            <S.ThemePreviewText>테마 미리 보기 -</S.ThemePreviewText>
            <S.ThemePreviewSubText>Grassdiary</S.ThemePreviewSubText>
          </S.ThemePreviewTextBox>
        </S.ThemePreviewContainer>
        <S.BoxContainer>{boxes}</S.BoxContainer>

        <S.ThemeColorContainer>
          <S.ThemeColorSection>
            <S.ThemeColorBox>
              <S.ThemeColorTitleContainer>
                <S.ThemeColorTitleBox>
                  <S.ThemeColorTitle>잔디 테마 색상</S.ThemeColorTitle>
                  <S.ThemeColorSubTitle>
                    모은 포인트로 나만의 색다른 잔디를 만들어요.
                  </S.ThemeColorSubTitle>
                </S.ThemeColorTitleBox>
              </S.ThemeColorTitleContainer>
              <S.ThemeColor
                backgroundColor={semantic.light.inverse.solid.accent}
                onClick={() =>
                  handleColorClick(
                    semantic.light.inverse.solid.accent,
                    'default',
                    1,
                  )
                }
                isSelected={
                  selectedColor === semantic.light.inverse.solid.accent
                }
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.red}
                onClick={() =>
                  handleColorClick(semantic.light.theme.solid.red, 'red', 2)
                }
                isSelected={selectedColor === semantic.light.theme.solid.red}
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.amber}
                onClick={() =>
                  handleColorClick(semantic.light.theme.solid.amber, 'amber', 3)
                }
                isSelected={selectedColor === semantic.light.theme.solid.amber}
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.blue}
                onClick={() =>
                  handleColorClick(semantic.light.theme.solid.blue, 'blue', 4)
                }
                isSelected={selectedColor === semantic.light.theme.solid.blue}
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.purple}
                onClick={() =>
                  handleColorClick(
                    semantic.light.theme.solid.purple,
                    'purple',
                    5,
                  )
                }
                isSelected={selectedColor === semantic.light.theme.solid.purple}
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.lightpink}
                onClick={() =>
                  handleColorClick(
                    semantic.light.theme.solid.lightpink,
                    'lightpink',
                    6,
                  )
                }
                isSelected={
                  selectedColor === semantic.light.theme.solid.lightpink
                }
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.lightpurple}
                onClick={() =>
                  handleColorClick(
                    semantic.light.theme.solid.lightpurple,
                    'lightpurple',
                    7,
                  )
                }
                isSelected={
                  selectedColor === semantic.light.theme.solid.lightpurple
                }
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.lightblue}
                onClick={() =>
                  handleColorClick(
                    semantic.light.theme.solid.lightblue,
                    'lightblue',
                    8,
                  )
                }
                isSelected={
                  selectedColor === semantic.light.theme.solid.lightblue
                }
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.ruby}
                onClick={() =>
                  handleColorClick(semantic.light.theme.solid.ruby, 'ruby', 9)
                }
                isSelected={selectedColor === semantic.light.theme.solid.ruby}
              />

              <S.ThemeColor
                backgroundColor={semantic.light.theme.solid.diamond}
                onClick={() =>
                  handleColorClick(
                    semantic.light.theme.solid.diamond,
                    'diamond',
                    10,
                  )
                }
                isSelected={
                  selectedColor === semantic.light.theme.solid.diamond
                }
              />
            </S.ThemeColorBox>
          </S.ThemeColorSection>
        </S.ThemeColorContainer>

        <S.BuyThemeBox>
          <S.BuyThemeBtn onClick={handlePurchase}>
            <S.BuyThemeBtnText>구입하기-490포인트</S.BuyThemeBtnText>
          </S.BuyThemeBtn>
        </S.BuyThemeBox>
      </S.Layout>
    </>
  );
};

export default ThemeStorePage;
