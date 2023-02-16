import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoginScreen } from "./view/login/LoginScreen";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
