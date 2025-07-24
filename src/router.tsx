import { createBrowserRouter } from 'react-router';
import { routes } from './routes.ts';
import Layout from './pages/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import GameDetailPage from './pages/GameDetailPage.tsx';

const router = createBrowserRouter([
  {
    path: routes.base,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routes.gamesId, element: <GameDetailPage /> },
    ],
  },
]);

export default router;
