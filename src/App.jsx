import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;