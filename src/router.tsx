import { createBrowserRouter } from 'react-router';
import { routes } from './routes.ts';
import Layout from './pages/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import GameDetailPage from './pages/GameDetailPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: routes.base,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routes.gamesSlug, element: <GameDetailPage /> },
    ],
  },
]);

export default router;
