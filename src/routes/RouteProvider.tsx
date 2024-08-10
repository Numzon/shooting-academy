import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as RRDRouterProvider,
} from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/Home';
import NewsPage from '../pages/News';
import NotFoundPage from '../pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export const RouterProvider = () => {
  return <RRDRouterProvider router={router} />;
};

export default RouterProvider;
