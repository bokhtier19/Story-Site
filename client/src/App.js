import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Write from "./Pages/Write";
import ErrorPage from "./Pages/Error";
import Copyright from "./Components/Copyright";
import ContactBar from "./Components/ContactBar";
import BottomNavbar from "./Components/BottomNavbar";
import Navbar from "./Components/Navbar";
import Category from "./Pages/Category";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomNavbar />
      <ContactBar />
      <Copyright />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/write",
          element: <Write />
        },
        {
          path: "/categories",
          element: <Category />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
