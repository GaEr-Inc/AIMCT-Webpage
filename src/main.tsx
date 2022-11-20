import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider, DEFAULT_THEME } from "@mantine/core";
import Layout from "./screens/Layout";
import Landing from "./screens/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
    ],
  },

]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>
);

