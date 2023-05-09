import React, { useState, useEffect } from "react";
import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";
import "./Burger.scss";
import burger from "../../assets/icons/icons8-hamburger-menu-48.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";


function Burger({ aboutSectionRef, newsSectionRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToNewsSection = () => {
    if (newsSectionRef.current) {
      newsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const handleAboutLinkClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToAboutSection, 500);
    } else {
      scrollToAboutSection();
    }
  };
  const handleNewsLinkClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToNewsSection, 500);
    } else {
      scrollToNewsSection();
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <img src={burger} alt="burger icon" className="burger__icon" />
      </div>
      <Menu
        className="burger-menu"
        isOpen={isOpen}
        selectedKey={"entry"}
        onClose={() => setIsOpen(false)}
      >
        {/* <a href="/" activeClassName="active" ref={aboutSectionRef}>
          <Item itemKey={"details"} text={"About"} />
        </NavLink> */}

        <a
          href="/"
          ref={aboutSectionRef}
          className="nav__link"
          >
        
          <Item itemKey={"about"} text={"About"} onItemClick={handleAboutLinkClick}></Item>
        </a>
        <a
          href="/"
          ref={newsSectionRef}
          className="nav__link"
          
        >
          <Item itemKey={"news"} text={"News"} onItemClick={handleNewsLinkClick}></Item>
        </a>
        <NavLink to="/membership" onClick={() => setIsOpen(false)}>
          <Item itemKey={"membership"} text={"Membership"}></Item>
        </NavLink>
        <NavLink to="donate" onClick={() => setIsOpen(false)}>
          <Item itemKey={"donate"} text={"Support/Donate"}></Item>
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          <Item itemKey={"email"} text={"Contact"}></Item>
        </NavLink>
      </Menu>
    </>
  );
}

export default Burger;
