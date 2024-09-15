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
import RegisterPage from '../pages/SignIn';
import { Paths } from './paths';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Paths.home} element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path={Paths.news} element={<NewsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path={Paths.signIn} element={<RegisterPage />} />
    </Route>,
  ),
);

export const RouterProvider = () => {
  return <RRDRouterProvider router={router} />;
};

export default RouterProvider;
