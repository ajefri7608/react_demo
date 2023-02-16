import { LoginScreen } from "../view/login/LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageNotFound } from "../view/error/PageNotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/login",
        element: <LoginScreen />,
      },
    ],
  },
]);
