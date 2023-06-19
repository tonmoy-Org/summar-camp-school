import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Instructors from "../Pages/Instructor/Instructors";
import AllClass from "../Pages/AllClass/AllClass";
import DashBoard from "../Layout/DashBoard";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import ManageClass from "../Pages/DashBoard/MangeClass/ManageClass";
import StudentClass from "../Pages/DashBoard/StudentClass/StudentClass";
import Payment from "../Pages/DashBoard/Payment/Payment";
import EnrolledClass from "../Pages/DashBoard/EnroledClass/EnrolledClass";
import InstructorRoute from "./InstructorRoute";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import SSLCommerz from "../Pages/DashBoard/SSLCommerz/SSLCommerz";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <LogIn></LogIn>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>,
        },
        {
          path: 'allClass',
          element: <AllClass></AllClass>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        //admin route
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allUsers',
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: 'manageClass',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        // instructor route
        {
          path: 'addClass',
          element: <InstructorRoute> <AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'myClass',
          element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
        },
        // student route
        {
          path: 'studentClass',
          element: <StudentClass></StudentClass>
        },
        {
          path: 'enrolledClass',
          element: <EnrolledClass></EnrolledClass>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'SSLCommerz',
          element: <SSLCommerz></SSLCommerz>
        }
      ]
    }
  ]);

  export default router;
