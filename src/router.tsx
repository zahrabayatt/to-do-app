import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import TasksPage from "./pages/TasksPage";
import CategoriesPage from "./pages/CategoriesPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: ":categoryId?", element: <TasksPage /> },
        { path: "categories", element: <CategoriesPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
