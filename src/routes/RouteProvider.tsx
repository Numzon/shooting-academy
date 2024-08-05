import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as RRDRouterProvider,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export const RouterProvider = () => {
  return <RRDRouterProvider router={router} />;
};

export default RouterProvider;
