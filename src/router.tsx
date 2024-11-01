import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import TasksPage from "./pages/TasksPage";
import CategoriesPage from "./pages/CategoriesPage";
import TasksPageSearch from "./types/TasksPageSearch";

const rootRoute = createRootRoute({
  component: Layout,
  errorComponent: ErrorPage,
  notFoundComponent: ErrorPage,
});

const tasksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TasksPage,
  validateSearch: (search: Record<string, unknown>): TasksPageSearch => {
    return {
      categoryId: (search.categoryId as string) || undefined,
    };
  },
});

const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/categories",
  component: CategoriesPage,
});

const routeTree = rootRoute.addChildren([tasksRoute, categoriesRoute]);

const router = createRouter({
  routeTree: routeTree,
  basepath: import.meta.env.BASE_URL,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
