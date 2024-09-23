import * as S from '@styles/component/Layout/Footer.style';
import { semantic } from '@styles/semantic';

import { ReactComponent as LogoText } from '@svg/logo.svg';
import logoIcon from '@image/sampleLogo_white.png';
import { FOOTER } from '@constants/message';

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.LogoBox>
          <S.LogoIcon src={logoIcon} />
          <LogoText fill={semantic.light.base.solid.white} />
        </S.LogoBox>
        <S.CopyRightText>{FOOTER.copyright}</S.CopyRightText>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
