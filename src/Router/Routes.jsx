import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AuthProvider from "../Providers/AuthProvider";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Orders from "../Pages/Orders";
import Profile from "../Pages/Profile";


function Routes() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/order",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    },
  ]);


  return (
    <section>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </section>
  )
}

export default Routes
