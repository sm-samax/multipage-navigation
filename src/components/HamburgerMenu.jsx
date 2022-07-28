import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";

export default function HamburgerMenu(props) {
  const pages = props.pages;

  const showMenu = (e) => {
    var menu = document.querySelector(".hb-menu");
    menu.style.left = "0%";
  };

  const hideMenu = (e) => {
    var menu = document.querySelector(".hb-menu");
    menu.style.left = "-100%";
  };

  return (
    <div>
      <div className="hb-btn" onClick={showMenu}>
        <HamburgerIcon fill="white" />
      </div>
      <div className="hb-menu" onClick={hideMenu}>
        <h1>Title</h1>
        {pages.map((page, index) => (
          <NavLink key={index} to={page.path}>
            {page.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
