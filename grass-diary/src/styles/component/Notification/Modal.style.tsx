import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';
import { ReactComponent as Close } from '@svg/close.svg';

export const ModalBox = styled.div<{ $active: boolean }>`
  display: ${props => (props.$active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0rem 1rem;

  background: ${semantic.light.bg.transparent.dimmed};
  cursor: auto;
`;

export const Container = styled.div`
  display: flex;
  width: 22.5rem;
  flex-direction: column;
  align-items: flex-start;

  border-radius: var(--radius-md, 1rem);
  background: ${semantic.light.bg.solid.normal};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08),
    0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.16);
`;

export const TopBox = styled.div`
  display: flex;
  padding: var(--gap-md, 1rem) var(--gap-lg, 1.25rem) var(--gap-md, 1rem)
    var(--gap-xl, 1.5rem);
  align-items: center;
  gap: var(--gap-md, 1rem);
  align-self: stretch;
`;

export const Title = styled.h2`
  flex: 1 0 0;
  ${TYPO.title1}
  color: ${semantic.light.object.solid.normal};
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
`;

export const ContentText = styled.p`
  padding: var(--gap-md, 1rem) var(--gap-xl, 1.5rem) var(--gap-xl, 1.5rem)
    var(--gap-xl, 1.5rem);
  text-align: center;
  align-self: stretch;
  ${TYPO.body1}
  color: ${semantic.light.object.transparent.neutral};
`;

export const Divider = styled.div`
  align-self: stretch;
  height: 0.0625rem;

  background: ${semantic.light.border.transparent.assistive};
`;

export const BottomBox = styled.div`
  display: flex;
  padding: var(--gap-2xs, 0.5rem);
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);
  align-self: stretch;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 1rem;
  padding: 1.5rem;
`;

export const TermText = styled.span`
  align-self: stretch;
  text-align: center;
  ${TYPO.caption1}
  color: ${semantic.light.object.transparent.assistive};
`;

export const TermAnchor = styled.a`
  text-decoration: underline;
  ${TYPO.caption1};
  color: ${semantic.light.accent.solid.hero};
`;
