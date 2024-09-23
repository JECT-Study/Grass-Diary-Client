import * as S from '@styles/Share/Share.style';
import { useEffect, useRef } from 'react';
import { Callout, Feed, PopularFeed } from '@components/index';
import { useLatestDiaries } from '@hooks/api/useLatestDiaries';
import { NULL } from '@constants/message';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Share = () => {
  const target = useRef<HTMLDivElement>(null);
  const { latest, fetchNextPage } = useLatestDiaries();

  const callback: IntersectionObserverCallback = async ([entry]) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  // 무한 스크롤
  useEffect(() => {
    if (latest?.length === 0) {
      window.scrollTo(0, 0);
    }
    const observer = new IntersectionObserver(callback, { threshold: 0.3 });
    const { current } = target;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [latest]);

  return (
    <S.Layout>
      <PopularFeed />
      <S.LatestFeedSection>
        <S.Title>공개 일기 피드</S.Title>
        {latest[0]?.length !== 0 ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 960: 2 }}>
            <Masonry columnsCount={2}>
              {latest.map(page =>
                page?.map(data => {
                  return <Feed key={data.diaryId} feed={data} isTop={false} />;
                }),
              )}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <Callout message={NULL.share_feed} />
        )}
      </S.LatestFeedSection>
      <S.ObserveBox ref={target} />
    </S.Layout>
  );
};

export default Share;
