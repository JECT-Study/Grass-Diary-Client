import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@components/index';
import Layout from '@components/Layout/Layout';
import {
  Intro,
  Main,
  CreateDiary,
  EditDiary,
  DiaryDetail,
  Share,
  Setting,
  MyPage,
  RewardPage,
  ThemeStorePage,
  ThemeSettingPage,
  ErrorPage,
  NotFoundPage,
} from '@pages/index';
import Withdraw from '@pages/Withdraw/Withdraw';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Intro /> },
      { path: '/main', element: <Main /> },
      { path: '/share', element: <Share /> },
    ],
    errorElement: <NotFoundPage />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/creatediary',
        element: <CreateDiary />,
        errorElement: <NotFoundPage />,
      },
      { path: '/editdiary/:diaryId', element: <EditDiary /> },
      { path: '/diary/:diaryId', element: <DiaryDetail /> },
      {
        path: '/withdraw',
        element: <Withdraw />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/themepage',
        element: <ThemeStorePage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/themesetting',
        element: <ThemeSettingPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/setting',
        element: <Setting />,
        errorElement: <NotFoundPage />,
      },
      { path: '/mypage', element: <MyPage />, errorElement: <NotFoundPage /> },
      {
        path: '/errorpage',
        element: <ErrorPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/rewardpage',
        element: <RewardPage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
