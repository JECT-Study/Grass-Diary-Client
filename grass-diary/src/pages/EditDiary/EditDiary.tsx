import * as S from '@styles/CreateDiary/CreateDiary.style';
import QuillEditor from '@pages/CreateDiary/QuillEditor';
import EMOJI from '@constants/emoji';
import 'dayjs/locale/ko';

import { CREATE_MESSAGES } from '@constants/message';
import { semantic } from '@styles/semantic';
import { BackButton } from '@components/index';
import { useState, useEffect } from 'react';

import { useTodayDate } from '@hooks/api/useTodayDate';
import { usePostImage } from '@hooks/api/usePostImage';
import { useToast } from '@state/toast/useToast';
import { ReactComponent as Publish } from '@svg/publish.svg';
import { ReactComponent as PublishOn } from '@svg/publish_on.svg';
import { ReactComponent as Close } from '@svg/close.svg';
import { ReactComponent as Tag } from '@svg/tag.svg';
import { ReactComponent as Lock } from '@svg/lock.svg';
import { ReactComponent as LockOpen } from '@svg/lock_open.svg';

import { useParamsId } from '@hooks/useParamsId';
import { usePatchDiary } from '@hooks/api/usePatchDiary';
import { useDiaryDetail } from '@hooks/api/useDiaryDetail';

const EditDiary = () => {
  const diaryId = useParamsId();
  const { mutate: patchDiary } = usePatchDiary(diaryId);
  const { detail } = useDiaryDetail(diaryId);
  const { date } = useTodayDate();
  const { toast } = useToast();
  const [diaryInfo, setDiaryInfo] = useState<IDiaryInfo>({
    hashArr: [],
    moodValue: 5,
    quillContent: '',
    isPrivate: true,
    year: null,
    month: null,
    date: null,
    day: null,
  });

  // 오늘의 질문, 나만의 일기 state
  const [selectedMode, setSelectedMode] = useState('dailyQuestion');

  // 저장 버튼 활성화 state
  const [isContentEmpty, setIsContentEmpty] = useState(true);

  // 해시태그 state
  const [hashtag, setHashtag] = useState<string>('');
  const [captionMessage, setCaptionMessage] = useState<string>(
    CREATE_MESSAGES.hashtag.instruction,
  );
  const [captionColor, setCaptionColor] = useState<string>(
    semantic.light.object.transparent.assistive,
  );

  // 이미지 state
  const { mutate: postImage } = usePostImage();
  const [image, setImage] = useState<ImageInfo>({
    imageId: 0,
    imageURL: '',
    name: '',
    size: '',
  });

  // 상태 업데이트 함수
  const setDiaryField = (field: Partial<IDiaryInfo>) => {
    setDiaryInfo(prev => ({ ...prev, ...field }));
  };

  const handleModeChange = (mode: string) => setSelectedMode(mode);
  const handlePrivateChange = () => setDiaryField({ isPrivate: true });
  const handlePublicChange = () => setDiaryField({ isPrivate: false });

  const handleMoodChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDiaryField({ moodValue: parseInt(e.target.value) });

  const onChangeHashtag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtag(e.target.value);

    if (e.target.value === '') {
      setCaptionMessage(CREATE_MESSAGES.hashtag.instruction);
      setCaptionColor(semantic.light.object.transparent.assistive);
    }

    if (e.target.value.length > 10) {
      setCaptionMessage(CREATE_MESSAGES.hashtag.too_long);
      setCaptionColor(semantic.light.feedback.solid.negative);
      return setHashtag('');
    }
  };

  // 해시태그 로직 함수
  const addHashtag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' && e.key !== ' ') {
      return; // 'Enter'나 'Space'가 아닌 경우 즉시 종료
    }

    e.preventDefault();
    const inputText = (e.target as HTMLInputElement).value.trim();

    if (inputText === '') {
      return; // 빈 문자열이면 즉시 종료
    }

    const specialCharsPattern = /[!@#$%^&*()_+={}\[\]|\\:;'"<>,.?/~`]/;
    const invalidKoreanPattern = /[ㄱ-ㅎㅏ-ㅣ]/;
    const validCharsPattern =
      /[가-힣A-Za-z0-9\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+/g;

    if (specialCharsPattern.test(inputText)) {
      setCaptionMessage(CREATE_MESSAGES.hashtag.no_special_characters);
      setCaptionColor(semantic.light.feedback.solid.negative);
      return setHashtag(''); // 특수문자 포함 시 즉시 종료
    }

    if (invalidKoreanPattern.test(inputText)) {
      setCaptionMessage(CREATE_MESSAGES.hashtag.invalid_korean);
      setCaptionColor(semantic.light.feedback.solid.negative);
      return setHashtag(''); // 잘못된 한글 포함 시 즉시 종료
    }

    if (!validCharsPattern.test(inputText)) {
      return; // 유효한 문자가 없으면 즉시 종료
    }

    const hashtagText = inputText.match(validCharsPattern)!.join('');

    if (diaryInfo.hashArr.includes(hashtagText)) {
      setCaptionMessage(CREATE_MESSAGES.hashtag.duplicate);
      setCaptionColor(semantic.light.feedback.solid.negative);
      return setHashtag(''); // 중복된 해시태그일 때 즉시 종료
    }

    if (diaryInfo.hashArr.length >= 15) {
      setCaptionMessage(CREATE_MESSAGES.hashtag.limit_exceeded);
      setCaptionColor(semantic.light.feedback.solid.negative);
      return setHashtag(''); // 해시태그 최대 개수 초과 시 즉시 종료
    }

    // 모든 조건을 통과한 경우에만 해시태그 추가
    setDiaryField({ hashArr: [...diaryInfo.hashArr, hashtagText] });
    setCaptionMessage(CREATE_MESSAGES.hashtag.instruction);
    setCaptionColor(semantic.light.object.transparent.assistive);
    setHashtag('');
  };

  // 해시태그 제거 핸들러
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && hashtag === '') {
      const lastHashtag = diaryInfo.hashArr[diaryInfo.hashArr.length - 1];

      if (lastHashtag) {
        setDiaryField({
          hashArr: diaryInfo.hashArr.slice(0, -1),
        });
        setHashtag(lastHashtag);
      }
    }
  };

  const removeImage = () => {
    setImage({
      imageId: 0,
      imageURL: '',
      name: '',
      size: '',
    });
  };

  const handleSave = async () => {
    if (isContentEmpty) return; // 일기 내용이 비어 있으면 저장 요청 불가

    const { quillContent, isPrivate, hashArr, moodValue } = diaryInfo;
    const request = {
      content: quillContent,
      isPrivate,
      conditionLevel: `LEVEL_${moodValue}`,
      hashtags: hashArr,
      imageId: image.imageId,
    };

    if (!image.imageId && image.imageURL) {
      postImage(image.imageURL, {
        onSuccess: res => {
          const request = {
            content: quillContent,
            isPrivate,
            conditionLevel: `LEVEL_${moodValue}`,
            hashtags: hashArr,
            imageId: res.data.imageId,
          };
          patchDiary(request);
        },
      });
      return;
    }

    patchDiary(request);
  };

  const handleContentChange = (content: string) => {
    setDiaryField({ quillContent: content });
    const checkText = content.replace(/<\/?[^>]+(>|$)/g, '');
    setIsContentEmpty(checkText.trim().length === 0);
  };

  // 일기 불러오기
  useEffect(() => {
    const savedDraft = localStorage.getItem('diary_draft');

    if (date) {
      setDiaryField({
        year: date.year,
        month: date.month,
        date: date.date,
        day: date.day,
      });
    }

    if (savedDraft) {
      const parsedDraft = JSON.parse(savedDraft);
      const img = parsedDraft.imageInfo;

      setDiaryInfo(parsedDraft);
      if (img) setImage(img);

      const checkText = parsedDraft.quillContent.replace(/<\/?[^>]+(>|$)/g, '');
      setIsContentEmpty(checkText.trim().length === 0);
      return;
    }

    if (detail) {
      const checkText = detail.content.replace(/<\/?[^>]+(>|$)/g, '');
      setIsContentEmpty(checkText.trim().length === 0);
      setDiaryField({
        hashArr: detail.tags.map((tag: ITages) => tag.tag),
        isPrivate: detail.isPrivate,
        moodValue: detail.transparency * 10,
        quillContent: detail.content,
      });

      if (detail.image.length) {
        setImage({
          imageId: detail.image[0].imageId,
          imageURL: detail.image[0].imageURL,
          name: '',
          size: '',
        });
      }
    }
  }, [date, detail]);

  // 로컬 스토리지 임시 저장

  const handleSaveDraft = () => {
    if (isContentEmpty) return; // 일기 내용이 비어 있으면 저장 요청 불가

    const draftData = { ...diaryInfo, imageInfo: image };
    localStorage.setItem('diary_draft', JSON.stringify(draftData));
    toast(CREATE_MESSAGES.toast.temp_save);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 's') {
        event.preventDefault();
        handleSaveDraft();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [diaryInfo]);

  return (
    <>
      <S.Layout>
        <S.SaveWrap>
          <S.SaveWrapContainer>
            <BackButton goBackTo={'/main'} />
            <S.SaveWrapText>{CREATE_MESSAGES.write_diary}</S.SaveWrapText>
          </S.SaveWrapContainer>
          <S.SaveWrapTime>
            {diaryInfo.month}월 {diaryInfo.date}일 {diaryInfo.day}요일
          </S.SaveWrapTime>
          <S.SaveBtnContainer>
            <S.SavePrevBtn disabled={isContentEmpty}>
              <S.SavePrevBtnText onClick={handleSaveDraft}>
                {CREATE_MESSAGES.temp_save}
              </S.SavePrevBtnText>
            </S.SavePrevBtn>
            <S.SaveBtn onClick={handleSave} disabled={isContentEmpty}>
              <S.SaveBtnText disabled={isContentEmpty}>
                {CREATE_MESSAGES.save}
              </S.SaveBtnText>
              {isContentEmpty ? <Publish /> : <PublishOn />}
            </S.SaveBtn>
          </S.SaveBtnContainer>
        </S.SaveWrap>
        <S.DiaryModeSelector>
          <S.DailyQuestionBox $isSelected={selectedMode === 'dailyQuestion'}>
            <S.ModeBtn>
              <input
                id="mode-btn-question"
                type="radio"
                checked={selectedMode === 'dailyQuestion'}
                onChange={() => handleModeChange('dailyQuestion')}
              />
              <label htmlFor="mode-btn-question"></label>
            </S.ModeBtn>
            <S.ModeBoxContainer>
              <S.DiaryModeSelectorText>
                {CREATE_MESSAGES.question_title}
              </S.DiaryModeSelectorText>
              <S.DiaryModeSelectorSubText>
                {CREATE_MESSAGES.question_prompt}
              </S.DiaryModeSelectorSubText>
            </S.ModeBoxContainer>
          </S.DailyQuestionBox>
          <S.CustomEntryBox $isSelected={selectedMode === 'customEntry'}>
            <S.ModeBtn>
              <input
                id="mode-btn-custom"
                type="radio"
                checked={selectedMode === 'customEntry'}
                onChange={() => handleModeChange('customEntry')}
              />
              <label htmlFor="mode-btn-custom"></label>
            </S.ModeBtn>
            <S.ModeBoxContainer>
              <S.DiaryModeSelectorText>
                {CREATE_MESSAGES.personal_diary}
              </S.DiaryModeSelectorText>
              <S.DiaryModeSelectorSubText>
                {CREATE_MESSAGES.personal_prompt}
              </S.DiaryModeSelectorSubText>
            </S.ModeBoxContainer>
          </S.CustomEntryBox>
        </S.DiaryModeSelector>
        <S.Divider>
          <S.DividerLine />
        </S.Divider>
        <S.ImageLayout>
          <S.ImageContainer>
            {image.imageURL ? (
              <>
                <S.Image>
                  <img src={image.imageURL} alt="image file" />
                </S.Image>
                <S.ImageName>{image.name}</S.ImageName>
                <S.ImageData>{image.size} KB</S.ImageData>
                <button onClick={removeImage}>
                  <S.ImageDelete>
                    <Close width={16} height={16} />
                  </S.ImageDelete>
                </button>
              </>
            ) : null}
          </S.ImageContainer>
        </S.ImageLayout>
        <S.MainContainer>
          <QuillEditor
            onContentChange={handleContentChange}
            quillContent={diaryInfo.quillContent}
            setImage={setImage}
            selectedMode={selectedMode}
          />
        </S.MainContainer>
        <S.HashtagContainer>
          <S.HashtagTitleBox>
            <S.HashtagTitle>{CREATE_MESSAGES.hashtag_title}</S.HashtagTitle>
          </S.HashtagTitleBox>
          <S.HashtagBox>
            <S.HashtagContent>
              <Tag />
              <S.HashtagArrTitle>
                {diaryInfo.hashArr.map((tag, index) => (
                  <span key={index}>
                    {tag}
                    {`  `}
                  </span>
                ))}
              </S.HashtagArrTitle>
              <S.HashtagInput
                type="text"
                value={hashtag}
                onChange={onChangeHashtag}
                onKeyUp={addHashtag}
                onKeyDown={handleKeyDown}
                placeholder={
                  diaryInfo.hashArr.length > 0
                    ? CREATE_MESSAGES.hashtag.enter_tag
                    : CREATE_MESSAGES.hashtag.examples
                }
              />
            </S.HashtagContent>
          </S.HashtagBox>
          <S.CaptionBox>
            <S.CaptionText color={captionColor}>{captionMessage}</S.CaptionText>
          </S.CaptionBox>
        </S.HashtagContainer>
        <S.SelectableContainer>
          <S.SelectablePublicBox>
            <S.SelectablePublicText>
              {CREATE_MESSAGES.visibility_title}
            </S.SelectablePublicText>
            <S.SelectableSection>
              <S.RadioBox>
                <S.RadioBtn>
                  <input
                    id="radio-btn-public"
                    type="radio"
                    value="public"
                    checked={!diaryInfo.isPrivate}
                    onChange={handlePublicChange}
                  />
                  <label htmlFor="radio-btn-public"></label>
                </S.RadioBtn>
                <LockOpen />
                <S.RadioText>{CREATE_MESSAGES.public}</S.RadioText>
              </S.RadioBox>
              <S.RadioBox>
                <S.RadioBtn>
                  <input
                    id="radio-btn-private"
                    type="radio"
                    value="private"
                    checked={diaryInfo.isPrivate}
                    onChange={handlePrivateChange}
                  />
                  <label htmlFor="radio-btn-private"></label>
                </S.RadioBtn>
                <Lock />
                <S.RadioText>{CREATE_MESSAGES.private}</S.RadioText>
              </S.RadioBox>
            </S.SelectableSection>
          </S.SelectablePublicBox>
          <S.EmotionBox>
            <S.EmotionText>{CREATE_MESSAGES.mood_today}</S.EmotionText>
            <S.EmojiBox>
              {Object.entries(EMOJI).map(([index, emoji]) => (
                <S.EmojiSelectableBox key={index}>
                  <S.EmojiInput
                    type="radio"
                    id={`emoji-${index}`}
                    name="mood"
                    value={index}
                    checked={diaryInfo.moodValue.toString() === index}
                    onChange={handleMoodChange}
                  />
                  <S.EmojiLabel htmlFor={`emoji-${index}`}>
                    {emoji}
                  </S.EmojiLabel>
                </S.EmojiSelectableBox>
              ))}
            </S.EmojiBox>
          </S.EmotionBox>
        </S.SelectableContainer>
      </S.Layout>
    </>
  );
};

export default EditDiary;
