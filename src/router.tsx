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

// Root route that wraps everything
const rootRoute = createRootRoute({
  component: Layout,
  errorComponent: ErrorPage,
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

// Build the route tree
const routeTree = rootRoute.addChildren([tasksRoute, categoriesRoute]);

// Create the router instance
const router = createRouter({
  routeTree: routeTree,
  basepath: import.meta.env.BASE_URL,
  defaultNotFoundComponent: ErrorPage,
});

// Register the router type
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
