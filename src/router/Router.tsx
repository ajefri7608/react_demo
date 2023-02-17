import { LoginScreen } from "../view/login/LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageNotFound } from "../view/error/PageNotFound";
import { ProductSearchScreen } from "../view/productSearch/ProductSearchScreen";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductSearchScreen />,
    errorElement: <PageNotFound />,
    children: [{}],
  },

  { path: "/login", element: <LoginScreen /> },
]);
