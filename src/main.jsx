import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'; // Assuming you have a CSS file
// import { Analytics } from "@vercel/analytics/next"
// 1. Define your routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: App 
//   },
//   {
//     path: "/main",
//     Component: React.lazy(() => import("./components/pages/MainPage"))
//   }
// ]);.
const router = createBrowserRouter([
  {
    path: "/",
    Component: App 
  },
  {
    path: "/main",
    Component: React.lazy(() => import("./components/pages/MainPage"))
  }
])


const rootElement = document.getElementById("root");

// 3. Render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* <Analytics /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);