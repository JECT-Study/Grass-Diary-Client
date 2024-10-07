import styled from 'styled-components';
import { TYPO } from '@styles/typo';
import { semantic } from '@styles/semantic';
import Slider from 'react-slick';

export const SeeMoreContainer = styled.div`
  display: flex;
  padding: var(--gap-4xs, 0.25rem) var(--gap-2xs, 0.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
`;

export const SeeMoreButton = styled.button`
  color: ${semantic.light.object.transparent.alternative};
  text-align: center;

  ${TYPO.label2}
`;

export const FeedBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ArrowBox = styled.div`
  display: flex;
  padding: var(--gap-4xs, 0.25rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-md, 1rem);
  border-radius: var(--radius-2xs, 0.25rem);
  cursor: pointer;
`;

export const SliderBox = styled.div`
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-dots li button:before {
    content: none;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-dots button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: ${semantic.light.fill.transparent.normal};
  }

  .slick-dots .slick-active button {
    background: ${semantic.light.accent.solid.normal};
  }
`;

export const CustomSlider = styled(Slider)<{ $lessFeed: boolean }>`
  width: ${props => (props.$lessFeed ? 38 : 60)}rem;
  display: flex;
  align-items: center;
  gap: var(--gap-md, 0.6rem);
  flex: 1 0 0;

  @media screen and (max-width: 60em) {
    width: 22rem;
  }
`;

export const RankSection = styled.section`
  display: flex;
  padding: var(--gap-4xl, 3rem) var(--gap-xl, 1.5rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-2xl, 2rem);
  align-self: stretch;
  overflow: hidden;
  background: ${semantic.light.fill.transparent.assistive};

  @media screen and (max-width: 60em) {
    min-width: 20em;
    padding: var(--gap-4xl, 3rem) var(--gap-md, 1rem);
  }
`;

export const RankText = styled.span`
  display: flex;
  padding: var(--gap-empty, 0rem) var(--gap-xl, 1.5rem);
  flex-direction: column;
  gap: var(--gap-md, 1rem);

  color: ${semantic.light.object.transparent.neutral};
  text-align: center;

  ${TYPO.title2}
`;
