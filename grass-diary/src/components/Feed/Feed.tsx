import * as S from '@styles/component/Feed/Feed.style';
import { useNavigate } from 'react-router-dom';

import { useWriterProfile } from '@hooks/api/useWriterProfile';
import { semantic } from '@styles/semantic';
import { ReactComponent as CommentIcon } from '@svg/comment.svg';
import EMOJI from '@constants/emoji';
import { ReactComponent as Favorite } from '@svg/favorite.svg';
import { useModal } from '@state/modal/useModal';
import { INTERACTION } from '@styles/interaction';
import { MODAL } from '@constants/message';
import { useUser } from '@state/user/useUser';
import { API_URI } from '@services/index';

interface IFeedProps {
  feed: Feed;
  isTop: boolean;
}

const Feed = ({ feed, isTop }: IFeedProps) => {
  const navigate = useNavigate();
  const memberId = useUser();
  const { data: writer } = useWriterProfile(feed.memberId);
  const { modal } = useModal();

  const title =
    `${feed.createdAt.slice(2, 4)}년 ` +
    `${feed.createdAt.slice(5, 7)}월 ` +
    `${feed.createdAt.slice(8, 10)}일`;

  const time = feed.createdAt.slice(11, 16);
  const mood = EMOJI[feed.transparency * 10];

  const extractTextFromHTML = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    return doc.body.textContent || '';
  };

  const handleGoogleLogin: TGoogleLogin = () => {
    window.open(`${API_URI}/api/auth/google`, '_self');
  };

  const FeedClickHandler = () => {
    const setting = {
      title: MODAL.login_induce.title,
      content: MODAL.login_induce.content,
    };

    const button1 = {
      active: true,
      text: MODAL.cancel,
    };

    const button2 = {
      active: true,
      text: MODAL.login_induce.button,
      clickHandler: handleGoogleLogin,
      color: semantic.light.accent.solid.hero,
      interaction: INTERACTION.accent.subtle(),
    };

    if (!memberId) {
      modal(setting, button1, button2);
      return;
    }

    navigate(`/diary/${feed.diaryId}`);
  };

  return (
    <S.Article className="Feed">
      <S.Container $isTop={isTop}>
        <S.TopBox>
          <S.UserImage src={writer?.profileImageURL} />
          <S.TextBox>
            <S.DateText>{title}</S.DateText>
            <S.NameBox>
              {feed.nickname}
              <S.TimeText>{time}</S.TimeText>
            </S.NameBox>
          </S.TextBox>
          <S.EmojiBox>{mood}</S.EmojiBox>
        </S.TopBox>

        <S.ContentBox onClick={FeedClickHandler}>
          {feed.image[0] && (
            <S.Image $isTop={isTop} src={feed.image[0].imageURL} />
          )}
          <S.ContentText $isTop={isTop} $hasImage={feed.image.length > 0}>
            {extractTextFromHTML(feed.content)}
          </S.ContentText>
        </S.ContentBox>

        <S.BottomBox>
          <S.IconBox>
            <CommentIcon />
            {feed.commentCount}
          </S.IconBox>
          <S.IconBox>
            <Favorite
              width={22}
              height={22}
              fill={semantic.light.object.transparent.assistive}
            />
            {feed.diaryLikeCount}
          </S.IconBox>
        </S.BottomBox>
      </S.Container>
    </S.Article>
  );
};

export default Feed;
