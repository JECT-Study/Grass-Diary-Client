import styled from 'styled-components';
import { semantic } from '@styles/semantic';
import { TYPO } from '@styles/typo';

export const Layout = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  background: ${semantic.light.bg.solid.subtler};
`;

export const Title = styled.h2`
  display: none;
  @media screen and (max-width: 60em) {
    display: block;
    color: ${semantic.light.object.transparent.neutral};
    text-align: center;
    ${TYPO.title1}
  }
`;

export const LatestFeedSection = styled.section`
  display: flex;
  max-width: var(--vw-desktop-min, 60rem);
  min-width: 20em;
  padding: var(--gap-7xl, 4.5rem) var(--gap-md, 1.5rem);
  flex-direction: column;
  gap: var(--gap-2xl, 2rem);
  align-self: stretch;

  margin: auto;
`;

export const ObserveBox = styled.div`
  width: 100%;
  height: 5rem;
`;
