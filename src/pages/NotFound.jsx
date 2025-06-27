import { Link } from "react-router-dom";
import Switch from "../Components/DarkModeSidebar";

const NotFound = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-center items-center
          bg-gradient-to-br from-green-50 via-white to-green-100
          dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
          text-center px-6 py-12 transition-colors duration-300"
      >
        <h1 className="text-7xl font-extrabold text-green-700 dark:text-emerald-400 mb-3">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-green-900 dark:text-emerald-300 mb-3">
          Oops! Page not found.
        </h2>
        <p className="text-green-800 dark:text-emerald-300 max-w-md mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist, is growing elsewhere, or might have been pruned.
        </p>

        <Link
          to="/"
          className="px-8 py-3 rounded-3xl bg-green-700 hover:bg-green-800 text-white font-semibold
            dark:bg-emerald-500 dark:hover:bg-emerald-600 transition"
        >
          Go Back Home
        </Link>

        {/* Dark Mode Toggle under the button */}
        <div className="mt-6">
          <Switch />
        </div>
      </div>
    </>
  );
};

export default NotFound;
