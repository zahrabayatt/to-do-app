import { Link } from "@tanstack/react-router";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-200">
          404
        </h1>
        <p className="mb-8 text-2xl text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
