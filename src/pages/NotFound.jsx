// import { Link } from "react-router-dom";
// // import { Helmet } from "react-helmet-async";

// const NotFound = () => {
//   return (
//     <>
//       {/* <Helmet>
//         <title>404 | Not Found - PlantCare</title>
//         <meta name="description" content="Page not found - return to the PlantCare homepage." />
//       </Helmet> */}

//       <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center px-4">
//         {/* Illustration (optional - you can use an SVG or image here) */}
//         {/* <img
//           src="https://i.ibb.co/9VGCrm0/plant-404.png" // You can replace this with your own plant-themed 404 image
//           alt="Plant not found"
//           className="w-60 md:w-80 mb-6"
//         /> */}

//         <h1 className="text-6xl font-bold text-green-600 mb-2">404</h1>
//         <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>
//         <p className="text-green-800 mb-6 max-w-md">
//           The page you’re looking for doesn’t exist, is growing elsewhere, or might have been pruned.
//         </p>

//         <Link
//           to="/"
//           className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
//         >
//           Go Back Home
//         </Link>
//       </div>
//     </>
//   );
// };

// export default NotFound;





import { Link } from "react-router-dom";
import Switch from "../Components/DarkModeSidebar";


const NotFound = () => {
  return (
    <>
     

      <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-center px-4">
        
        <h1 className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          Oops! Page not found.
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
          The page you’re looking for doesn’t exist, is growing elsewhere, or might have been pruned.
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 dark:hover:bg-green-500 transition mb-4"
        >
          Go Back Home
        </Link>

        {/* Dark Mode Toggle under the button */}
        <div className="mt-2">
          <Switch />
        </div>
      </div>
    </>
  );
};

export default NotFound;







// import { Link } from "react-router-dom";
// // import { Helmet } from "react-helmet-async";

// const NotFound = () => {
//   return (
//     <>
//       {/* <Helmet>
//         <title>404 | Not Found - PlantCare</title>
//         <meta name="description" content="Page not found - return to the PlantCare homepage." />
//       </Helmet> */}

//       <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 dark:bg-gray-900 text-center px-4">
//         {/* Optional image */}
//         {/* <img
//           src="https://i.ibb.co/9VGCrm0/plant-404.png"
//           alt="Plant not found"
//           className="w-60 md:w-80 mb-6"
//         /> */}

//         <h1 className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2">404</h1>
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
//           Oops! Page not found.
//         </h2>
//         <p className="text-green-800 dark:text-gray-300 mb-6 max-w-md">
//           The page you’re looking for doesn’t exist, is growing elsewhere, or might have been pruned.
//         </p>

//         <Link
//           to="/"
//           className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 dark:hover:bg-green-500 transition"
//         >
//           Go Back Home
//         </Link>
//       </div>
//     </>
//   );
// };

// export default NotFound;
