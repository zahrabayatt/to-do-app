import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
