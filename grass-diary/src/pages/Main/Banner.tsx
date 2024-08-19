import styled from 'styled-components';
import { MAIN_MESSAGES } from '@constants/message';
import { semantic } from '@styles/semantic';
import { ReactComponent as Info } from '@svg/info.svg';

const Banner = () => {
  return (
    <>
      <Section>
        <Container>
          <Info />
          <Text>{MAIN_MESSAGES.BANNER.FUTURE_CONTENT_MESSAGE}</Text>
        </Container>
      </Section>
    </>
  );
};

export default Banner;

const Section = styled.div`
  display: flex;
  max-width: var(--vw-desktop-min, 60rem);
  padding: var(--gap-4xl, 3rem) var(--gap-xl, 1.5rem);
  justify-content: center;
  align-items: center;
  gap: var(--gap-empty, 0rem);

  border-radius: var(--radius-empty, 0rem);
  opacity: var(--opacity-visible, 1);
`;

const Container = styled.div`
  display: flex;
  width: 26.25rem;
  padding: var(--gap-3xs, 0.375rem) var(--gap-sm, 0.75rem);
  align-items: flex-start;
  gap: var(--gap-2xs, 0.5rem);

  border-radius: var(--radius-xs, 0.5rem);
  border: var(--stroke-thin, 0.0625rem) solid
    ${semantic.light.border.transparent.alternative};
  opacity: var(--opacity-visible, 1);
  background: ${semantic.light.fill.transparent.assistive};
`;

const Text = styled.p`
  flex: 1 0 0;

  color: ${semantic.light.object.transparent.alternative};

  /* caption/2 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;

  opacity: var(--opacity-visible, 1);
`;