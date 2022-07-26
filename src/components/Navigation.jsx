import { NavLink } from "react-router-dom";
import "./Navigation.css";

export function Navigation(props) {
  const pages = props.pages;

  return (
    <div className="nav-bar">
      <h1>Title</h1>
      {pages.map((page, index) => (
        <NavLink key={index} to={page.path}>
          {page.name}
        </NavLink>
      ))}
    </div>
  );
}
