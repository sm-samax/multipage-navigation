import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";

export default function App() {
  const pages = [
    {
      name: "Home",
      path: "/",
      element: <p>Home</p>,
    },
    {
      name: "Contact",
      path: "/contact",
      element: <p>Contact</p>,
    },
    {
      name: "About us",
      path: "/aboutus",
      element: <p>About us</p>,
    },
    {
      name: "Blogs",
      path: "/blogs",
      element: <p>Blogs</p>,
    },
    {
      name: "Products",
      path: "/products",
      element: <p>Products</p>,
    },
  ];

  return (
    <BrowserRouter>
      <Navigation pages={pages} />
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} exact path={page.path} element={page.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
