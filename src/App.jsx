import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Navigation } from "./components/Navigation";
import { BrowserView, MobileView } from "react-device-detect";
import Home from "./pages/Home";
import HamburgerMenu from "./components/HamburgerMenu";

export default function App() {
  const Contact = React.lazy(() => import("./pages/Contact"));
  const AboutUs = React.lazy(() => import("./pages/AboutUs"));
  const Blogs = React.lazy(() => import("./pages/Blogs"));
  const Products = React.lazy(() => import("./pages/Products"));

  const pages = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
    {
      name: "Contact",
      path: "/contact",
      element: <Contact />,
    },
    {
      name: "About us",
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      name: "Blogs",
      path: "/blogs",
      element: <Blogs />,
    },
    {
      name: "Products",
      path: "/products",
      element: <Products />,
    },
  ];

  return (
    <BrowserRouter>
      <BrowserView>
        <Navigation pages={pages} />
      </BrowserView>

      <MobileView>
        <HamburgerMenu pages={pages} />
      </MobileView>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {pages.map((page, index) => (
            <Route key={index} exact path={page.path} element={page.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
