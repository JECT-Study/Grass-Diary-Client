import * as S from '@styles/DiaryDetail/DiaryDetail.style';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

import { BackButton, Like, Comments } from '@components/index';
import EMOJI from '@constants/emoji';
import ImageModal from './modal/ImageModal';
import Setting from './Setting';

import { useDiaryDetail } from '@hooks/api/useDiaryDetail';
import { useParamsId } from '@hooks/useParamsId';
import { useUser } from '@state/user/useUser';

import { ReactComponent as AvatarBg } from '@svg/avatarBg.svg';
import { ReactComponent as LockOpen } from '@svg/lock_open.svg';
import { ReactComponent as Lock } from '@svg/lock.svg';
import { ReactComponent as Tag } from '@svg/tag.svg';

const DiaryDetail = () => {
  const diaryId = useParamsId();
  const memberId = useUser();
  const [likeCount, setLikeCount] = useState(0);
  const [imageModal, setImageModal] = useState(false);
  const { detail, writer } = useDiaryDetail(diaryId);

  const zoom = () => {
    if (!imageModal) setImageModal(true);
  };

  useEffect(() => {
    if (detail) setLikeCount(detail.likeCount);
  }, [detail]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createMarkup = (htmlContent: string | Node) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  return (
    <S.Layout>
      {imageModal && detail?.image.length && (
        <ImageModal
          img={detail?.image[0].imageURL}
          setImageModal={setImageModal}
        />
      )}

      <S.Container>
        <S.TopSection>
          <S.TopBox>
            <BackButton />
            <S.Title>{detail?.createdDate}</S.Title>
          </S.TopBox>

          <S.TopBox>
            <S.WriterBox>
              {writer ? (
                <S.ProfileImage src={writer.profileImageURL} />
              ) : (
                <AvatarBg />
              )}
              <S.NicknameText>{writer?.nickname}</S.NicknameText>
              <S.TimeText>{detail?.createdAt}</S.TimeText>
            </S.WriterBox>

            <S.PrivateBox>
              {detail && (
                <>
                  {detail.isPrivate ? <Lock /> : <LockOpen />}
                  <S.PrivateText>
                    {detail.isPrivate ? '비공개' : '공개'}
                  </S.PrivateText>
                </>
              )}
            </S.PrivateBox>

            <S.EmojiBox>
              <S.EmojiText>
                {detail && EMOJI[detail.transparency * 10]}
              </S.EmojiText>
            </S.EmojiBox>
          </S.TopBox>

          <S.TopBox>
            {memberId === detail?.memberId && (
              <Setting diaryId={diaryId} createdDate={detail?.createdDate} />
            )}
          </S.TopBox>
        </S.TopSection>

        <S.DiarySection>
          {detail?.image.length ? (
            <S.Image src={detail?.image[0].imageURL} onClick={zoom}></S.Image>
          ) : null}
          <S.ContentBox
            dangerouslySetInnerHTML={createMarkup(detail?.content || '')}
          />
        </S.DiarySection>

        <S.BottomSection>
          <S.TagList>
            {detail?.tags?.map(tag => {
              return (
                <S.TagItem key={tag.id}>
                  <Tag />
                  <S.TagText>{tag.tag}</S.TagText>
                </S.TagItem>
              );
            })}
          </S.TagList>
          <Like
            diaryId={diaryId}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
            liked={detail?.isLikedByLogInMember}
          />
        </S.BottomSection>
        <S.Divider />
        <S.CommentCountText>{`댓글 ${detail?.commentCount}`}</S.CommentCountText>
        <Comments />
      </S.Container>
    </S.Layout>
  );
};

export default DiaryDetail;
