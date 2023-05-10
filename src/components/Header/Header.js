import { Link, useLocation, useNavigate } from "react-router-dom";
import Burger from "../Burger/Burger";
// import DownloadPdf from "../DownloadPdf/DownloadPdf";
import "./Header.scss";
import { forwardRef, useRef } from "react";

const Header = forwardRef(({ aboutSectionRef, newsSectionRef }, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
  

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

//   const scrollToFooterMenu = () => {
//     if (footerMenuRef.current) {
//       footerMenuRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   };

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
  const handleFooterLinkClick = (e) => {
    e.preventDefault();
    const footer = document.getElementsByClassName('footer__section')[0];
    footer.scrollIntoView({behavior: 'smooth', block: "end",});
  };

 
  return (
    <div className="nav__section">
      <div className="nav__limit">
        <Link to="/" className="nav__link nav__link--logo">
          {" "}
          <h2 className="nav__logo">SATS</h2>
        </Link>
        <div className="nav__container">
          <div className="nav__links--wrapper">
            <a
              href="#about"
              className="nav__link nav__link--tablet-only"
              onClick={handleAboutLinkClick}
            >
              About
            </a>
            <a
              href="/"
              className="nav__link nav__link--tablet-only"
              onClick={handleNewsLinkClick}
            >
              News
            </a>
            <div>
              <a
                href="#news"
                className="nav__link"
                onClick={handleFooterLinkClick}
              >
                Menu
              </a>
            </div>

            {/* <Burger className="burger__import"  aboutSectionRef={aboutSectionRef}
          newsSectionRef={newsSectionRef}/> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
