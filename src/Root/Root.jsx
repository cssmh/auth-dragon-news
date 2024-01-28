import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomeLayout/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <PrivateRoute><Career></Career></PrivateRoute>,
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Root;
