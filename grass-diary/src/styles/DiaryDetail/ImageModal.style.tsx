import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '@svg/close.svg';
import { TYPO } from '@styles/typo';
import { semantic } from '@styles/semantic';

export const ImageModalBox = styled.div`
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${semantic.light.bg.transparent.dimmed};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const CloseBox = styled.div`
  display: inline-flex;
  padding: var(--gap-3xs, 0.375rem) var(--gap-xs, 0.625rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  cursor: pointer;
  margin-left: auto;
`;

export const CloseText = styled.span`
  ${TYPO.label3}
  color: ${semantic.light.inverse.solid.normal};
  text-align: center;
`;

export const CloseIcon = styled(CloseSvg)`
  width: 20px;
  height: 20px;
  fill: ${semantic.light.inverse.solid.normal};
`;

export const Image = styled.img`
  max-width: 80vw;
  max-height: 80vh;
`;
