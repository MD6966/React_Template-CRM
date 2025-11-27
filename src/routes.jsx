import { useRoutes, Navigate, useNavigate } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import LandingLayout from "./layout/LandingLayout";
import Login from "./Views/auth/Login";
import SignUp from "./Views/auth/SignUp";
import Layout from "./layout/DashboardLayout/Layout";
import Settings from "./Views/Settings/Settings";
import ChatbotBuilder from "./Views/ChatbotBuilder/ChatbotBuilder";
import Users from "./Views/Landing/components/Users/Users";
import Test from "./Test";

export default function Router() {
  const isAuthenticated  = false;
  const navigate=useNavigate()

  const element = useRoutes([
    {
      path: "/login",
      element:  <Login />,
    },
     {
      path: "/signup",
      element:  <SignUp />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path:"/users",
          element: <Users />,
        },
          {
          path:"/settings" ,
          element: <Settings />,
        },
          {
          path:"/chatbot-builder" ,
          element: <ChatbotBuilder />,
        },
      ],
    },
  ]);

  return element;
}