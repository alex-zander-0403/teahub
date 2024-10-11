import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import TeaPage from "./components/pages/TeaPage";

// import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/tea",
          element: <TeaPage />,
        },
        // {
        //   path: "/messages/:messageId",
        //   element: <MessageInfoPage />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
