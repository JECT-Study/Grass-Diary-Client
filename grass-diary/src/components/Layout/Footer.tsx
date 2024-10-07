import * as S from '@styles/component/Layout/Footer.style';
import { semantic } from '@styles/semantic';

import { ReactComponent as LogoText } from '@svg/logo.svg';
import logoIcon from '@image/sampleLogo_white.png';
import { FOOTER } from '@constants/message';

const Footer = () => {
  const moving = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <S.Footer>
      <S.Container>
        <S.TopBox>
          <S.LogoBox>
            <S.LogoIcon src={logoIcon} />
            <LogoText fill={semantic.light.base.solid.white} />
          </S.LogoBox>
          <S.ButtonContainer>
            <S.FooterButton onClick={() => moving(FOOTER.terms_of_use_url)}>
              이용약관
            </S.FooterButton>
            <S.FooterButton onClick={() => moving(FOOTER.privacy_policy_url)}>
              개인정보 처리방침
            </S.FooterButton>
          </S.ButtonContainer>
        </S.TopBox>

        <S.CopyRightContainer>
          <S.Text>{FOOTER.copyright_front}</S.Text>
          <S.Text> {FOOTER.copyright_back}</S.Text>
        </S.CopyRightContainer>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
