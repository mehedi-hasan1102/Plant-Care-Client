

import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import AuthProvider from "./context/Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

import MyPlants from "./routes/MyPlants";
import AddPlantPage from "./routes/AddPlantPage";
import AllPlantsPage from './routes/AllPlantsPage';
import PlantDetailsPage from './routes/PlantDetailsPage';
import Profile from './routes/Profile';
import UpdatePlant from "./pages/UpdatePlant";













const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      {
        path: "add-plant",
        element: (
          <PrivateRoute>
            <AddPlantPage />
          </PrivateRoute>
        ),
      },
      {
        path: "all-plants",
        element: (
          // <PrivateRoute>
            <AllPlantsPage />


          // {/* </PrivateRoute>  */}



        ),
      },
      {
        // path: "update-plant/:id",
        path: "update-plant/:id",
        loader: ({ params }) =>
          fetch(
            `https://project-web-b11-a10-plant-care-serv.vercel.app/plants/${params.id}`
          ),

        element: (
          <PrivateRoute>
            <UpdatePlant />
          </PrivateRoute>
        ),
      },
      {
        path: "my-plants",
        element: (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetailsPage />
          </PrivateRoute>
        ),
      },
    ],
  },




  // Catch-all route for 404 Not Found
  {
    path: "*",
    element: <NotFound />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={1500} />
      
    </AuthProvider>
  </React.StrictMode>
);
