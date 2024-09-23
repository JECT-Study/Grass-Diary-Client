import { useState, useMemo } from 'react';
import styled from 'styled-components';

import EMOJI from '@constants/emoji';
import { TYPO } from '@styles/typo';
import { semantic } from '@styles/semantic';

const MoodProfile = ({ diary, index }: IMoodProfile) => {
  const [mood, setMood] = useState<string[]>([]);

  useMemo(() => {
    const moods: string[] = [];

    for (let i = 0; i < diary.length; i++) {
      let diaryMood: string = diary[i].transparency!.toString()[2];
      moods.push(EMOJI[diaryMood]);
    }

    setMood(moods);
  }, [diary]);

  return (
    <EmojiBox>
      <EmojiText>{mood[index]}</EmojiText>
    </EmojiBox>
  );
};

export default MoodProfile;

const EmojiBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.125rem;

  border-radius: 6rem;
  border: 1px solid ${semantic.light.border.transparent.assistive};
  background: ${semantic.light.fill.transparent.assistive};
`;

const EmojiText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;

  text-align: center;

  ${TYPO.title2}
  color: ${semantic.light.object.transparent.alternative};
`;
