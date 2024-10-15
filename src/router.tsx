import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import TasksPage from "./pages/TasksPage";
import CategoriesPage from "./pages/CategoriesPage";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: ":categoryId?", element: <TasksPage /> },
      { path: "categories", element: <CategoriesPage /> },
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
]);

export default router;
