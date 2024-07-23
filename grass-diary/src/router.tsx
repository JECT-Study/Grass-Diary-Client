import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@components/index';
import { lazy } from 'react';

const Intro = lazy(() => import('@pages/Intro/Intro'));
const Main = lazy(() => import('@pages/Main/Main'));
const CreateDiary = lazy(() => import('@pages/CreateDiary/CreateDiary'));
const DiaryDetail = lazy(() => import('@pages/DiaryDetail/DiaryDetail'));
const Share = lazy(() => import('@pages/Share/Share'));
const Setting = lazy(() => import('@pages/Setting/Setting'));
const MyPage = lazy(() => import('@pages/MyPage/MyPage'));
const NonExistentDiary = lazy(
  () => import('@pages/DiaryDetail/NonExistentDiary'),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/creatediary', element: <CreateDiary /> },
      { path: '/editdiary/:diaryId', element: <CreateDiary /> },
      { path: '/diary/:diaryId', element: <DiaryDetail /> },
      { path: '/share', element: <Share /> },
      { path: '/setting', element: <Setting /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/non-existent-page', element: <NonExistentDiary /> },
    ],
  },
]);

export default router;
