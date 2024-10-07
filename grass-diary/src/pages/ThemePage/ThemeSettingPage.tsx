import * as S from '@styles/ThemePage/ThemePage.style';
import { semantic } from '@styles/semantic';
import { ReactComponent as Arrow } from '@svg/chevron_right.svg';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useUser } from '@state/user/useUser';
import { useModal } from '@state/modal/useModal';
import { useThemeSetting } from '@hooks/api/useThemeSetting';
import { useGrassRecord } from '@hooks/api/useGrassRecord';
import { useThemeList } from '@hooks/api/useThemeList';

const ThemeSettingPage = () => {
  const { modal } = useModal();
  const memberId = useUser();
  const { grassQuery } = useGrassRecord();
  const { mutate: applyThemeColor } = useThemeSetting();
  const { themeList } = useThemeList();
  const [selectedColor, setSelectedColor] = useState<string>(
    `rgb(${grassQuery?.grassInfoDTO.colorRGB})` || '',
  );
  const [selectedColorName, setSelectedColorName] = useState<string>('');
  const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
  const previewBoxes = 3;
  const previewDays = 31;

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
    },
    [],
  );

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

  // 모달

  const chooseModal = () => {
    const setting = {
      title: '테마 설정',
      content: `색상을 선택해 주세요.`,
    };
    const button1 = {
      active: true,
      text: '확인',
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  const applyModal = () => {
    const setting = {
      title: '테마 설정',
      content: `적용 완료!`,
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

  const alreadyModal = () => {
    const setting = {
      title: '테마 설정',
      content: `이미 사용 중인 색상입니다.`,
    };
    const button1 = {
      active: true,
      text: '확인',
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  const nonexistentModal = () => {
    const setting = {
      title: '테마 설정',
      content: `해당 색상을 소유하고 있지 않습니다.`,
    };
    const button1 = {
      active: true,
      text: '확인',
      color: semantic.light.accent.solid.alternative,
    };
    modal(setting, button1);
  };

  const handleApplyClick = () => {
    if (!selectedColorId) {
      chooseModal();
      return;
    }
    applyThemeColor(
      {
        memberId,
        colorCodeId: selectedColorId,
        colorName: selectedColorName,
        rgb: selectedColor,
      },
      {
        onError: error => {
          const statusCode = error?.response?.status;

          if (statusCode === 409) {
            const errorCode = error?.response?.data?.code;
            console.log(errorCode);
            if (errorCode === 'COLOR_ALREADY_EQUIPPED_ERR') {
              alreadyModal();
            } else if (errorCode === 'MEMBER_DOES_NOT_OWN_COLOR_ERR') {
              nonexistentModal();
            } else {
              alert('알 수 없는 오류가 발생했습니다.');
            }
          } else {
            alert('테마 적용 중 오류가 발생했습니다.');
          }
        },
        onSuccess: () => {
          applyModal();
        },
      },
    );
  };

  return (
    <>
      <S.Layout>
        <S.ThemeTitleBox>
          <Link to="/main">
            <S.ThemeStoreBtn onClick={handleClick}>
              <S.ThemeStoreBtnText>메인 페이지로 이동하기</S.ThemeStoreBtnText>
              <Arrow
                width={18}
                height={18}
                fill={semantic.light.accent.solid.hero}
              />
            </S.ThemeStoreBtn>
          </Link>
        </S.ThemeTitleBox>

        <S.ThemeTitle>테마 설정</S.ThemeTitle>

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
              {themeList?.colors?.length > 0 ? (
                themeList.colors.map(color => (
                  <S.ThemeColor
                    key={color.id}
                    backgroundColor={`rgb(${color.rgb})`}
                    onClick={() =>
                      handleColorClick(
                        `rgb(${color.rgb})`,
                        color.colorName,
                        color.id,
                      )
                    }
                    isSelected={selectedColor === `rgb(${color.rgb})`}
                  />
                ))
              ) : (
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
              )}
            </S.ThemeColorBox>
          </S.ThemeColorSection>
        </S.ThemeColorContainer>

        <S.BuyThemeBox>
          <S.BuyThemeBtn onClick={handleApplyClick}>
            <S.BuyThemeBtnText>적용하기</S.BuyThemeBtnText>
          </S.BuyThemeBtn>
        </S.BuyThemeBox>
      </S.Layout>
    </>
  );
};

export default ThemeSettingPage;
