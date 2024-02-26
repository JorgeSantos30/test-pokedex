import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout.jsx";
import ErrorPage from "./pages/error/index.jsx";
import Home from "./pages/home/index.jsx";
import Coaches from "./pages/coaches/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "coaches",
        element: <Coaches />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
