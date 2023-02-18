import React, { useEffect } from "react";

import { LoginScreen } from "./view/login/LoginScreen";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(195, 212, 233, 0.4)";
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
