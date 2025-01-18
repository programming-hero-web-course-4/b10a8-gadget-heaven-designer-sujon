import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layOut/HomeLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{}],
  },
]);

export default router;
