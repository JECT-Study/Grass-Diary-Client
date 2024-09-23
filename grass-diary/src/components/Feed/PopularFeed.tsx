import * as S from '@styles/component/Feed/Popular.style';
import { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { semantic } from '@styles/semantic';
import { ReactComponent as LeftArrow } from '@svg/chevron_left.svg';
import { ReactComponent as RightArrow } from '@svg/chevron_right.svg';

import { MAIN_MESSAGES, NULL } from '@constants/message';
import { Callout, Feed } from '@components/index';
import { usePopularDiaries } from '@hooks/api/usePopularDiaries';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PrevArrow = (props: CustomArrowProps) => {
  return (
    <S.ArrowBox onClick={props.onClick}>
      <LeftArrow
        width={20}
        height={20}
        fill={semantic.light.object.transparent.neutral}
      />
    </S.ArrowBox>
  );
};

const NextArrow = (props: CustomArrowProps) => {
  return (
    <S.ArrowBox onClick={props.onClick}>
      <RightArrow
        width={20}
        height={20}
        fill={semantic.light.object.transparent.neutral}
      />
    </S.ArrowBox>
  );
};

const PopularFeed = () => {
  const { data: top10 } = usePopularDiaries();
  const location = useLocation();
  const [mobileSize, setMobileSize] = useState(false);

  const settings = {
    dots: mobileSize ? true : top10 && top10.length < 4 ? false : true,
    infinite: true,
    slidesToShow: mobileSize ? 1 : top10?.length === 2 ? 2 : 3,
    slidesToScroll: mobileSize ? 1 : top10?.length === 2 ? 2 : 3,
    autoplay: mobileSize ? true : top10 && top10.length < 4 ? false : true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: mobileSize ? false : top10 && top10?.length < 4 ? false : true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const feedList = top10?.map(data => (
    <Feed key={data.diaryId} feed={data} isTop={true} />
  ));

  const handleClick = () => window.scrollTo(0, 0);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 60em)');
    const resizeHandler = () => setMobileSize(media.matches);

    if (media.matches !== mobileSize) setMobileSize(media.matches);
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [mobileSize]);

  return (
    <S.RankSection>
      <S.RankText>
        이번 주 인기 일기
        {location.pathname === '/main' && (
          <Link to="/share" onClick={handleClick}>
            <S.SeeMoreContainer>
              <S.SeeMoreButton>
                {MAIN_MESSAGES.bottom_section.see_more}
              </S.SeeMoreButton>
              <RightArrow
                width={18}
                height={18}
                fill={semantic.light.object.transparent.alternative}
              />
            </S.SeeMoreContainer>
          </Link>
        )}
      </S.RankText>

      {top10 && top10.length > 1 ? (
        <S.SliderBox>
          <S.CustomSlider
            {...settings}
            className="Slider"
            $lessFeed={top10.length === 2 ? true : false}
          >
            {top10?.map(data => (
              <Feed key={data.diaryId} feed={data} isTop={true} />
            ))}
          </S.CustomSlider>
        </S.SliderBox>
      ) : (
        <S.FeedBox>{feedList}</S.FeedBox>
      )}
      {top10 && !top10.length ? (
        <Callout message={NULL.share_popular_feed} />
      ) : null}
    </S.RankSection>
  );
};

export default PopularFeed;
