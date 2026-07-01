import type { RouteObject } from "react-router";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import MainLayout from "./layouts/MainLayout";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
    ],
  },
];

export default routes;