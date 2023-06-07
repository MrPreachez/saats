import { Link, useLocation, useNavigate } from "react-router-dom";
import instagram from "../../assets/icons/instagram-f-svgrepo-com.svg";
import envelope from "../../assets/icons/envelope-solid.svg";
import { FiChevronsUp } from "react-icons/fi";
import "./Footer.scss";
import { forwardRef } from "react";

const Footer = forwardRef(({ aboutSectionRef, newsSectionRef, memberTopRef, donateSectionRef }, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
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

const scrollToTopSection = () => {
  if (memberTopRef.current){
    memberTopRef.current.scrollIntoView({
      behavior: "smooth",
      top: 0
    })
  }
}
const scrollToDonate = () => {
  if (donateSectionRef.current){
    donateSectionRef.current.scrollIntoView({
      bevior: "smooth",
      block: 'center'
    })
  }
}

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

  const handleHeaderLinkClick = (e) => {
    e.preventDefault();
    const footer = document.getElementsByClassName("nav__section")[0];
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMemberPageClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/membership") {
      navigate("/membership");
      setTimeout(scrollToTopSection, 500);
    } else {
      scrollToTopSection();
    }
  };
  const handleDonateSectionClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/membership") {
      navigate("/membership");
      setTimeout(scrollToDonate, 500);
    } else {
      scrollToDonate();
    }
  };



  return (
    <div className="footer__section">
      <div className="footer__limit">
        <div className="footer__scrollTo--top">
          <button
            className="CTA__scrollTo--header "
            onClick={handleHeaderLinkClick}
          >
            <p className="CTA__scrollTo">Back to Top</p>
            <FiChevronsUp className="chevron" size={35} color="#D4A373" />
          </button>
        </div>
        <div className="footer__wrapper--box">
          <div className="footer__containerA">
            <div className="menu__block">
              <ul className="menu__list">
                <li>
                  <a
                    href="#about"
                    className="menu__item--link"
                    onClick={handleAboutLinkClick}
                  >
                    About
                  </a>
                </li>

                <li className="menu__listItem">
                  <a
                    href="#news"
                    className="menu__item--link"
                    onClick={handleNewsLinkClick}
                  >
                    News
                  </a>
                </li>
                
                <li className="menu__listItem">
                  <a 
                  href="#memberTop"
                  className="menu__item--link"
                  onClick={handleMemberPageClick}
                  >Membership</a>
                </li>
                <li className="menu__listItem">
                  <a 
                  href="#donateSection"
                  className="menu__item--link"
                  onClick={handleDonateSectionClick}
                  >Donate</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__containerB">
            <div className="footer__block1">
              <Link to="" className="footer__link">
                <div className="footer__icon-block">
                  <img
                    src={instagram}
                    alt="inst icon"
                    className="footer__icon"
                  />
                  <p className="footer__social">Instagram</p>
                </div>
              </Link>
              <Link className="footer__email--link footer__link" to="/contact">
                <div className="footer__icon-block">
                  <img
                    src={envelope}
                    alt="envelope icon"
                    className="footer__email-icon footer__icon"
                  />
                  <p className="footer__socialB">Email - Contact SATS</p>
                </div>
              </Link>
            </div>
            <div className="footer__block2">
              <div className="footer__address-container">
                <p className="footer__address1"> 505 Harold St</p>
                <p className="footer__address2"> PO Box 332</p>
                <p className="footer__address3"> Slocan BC V0G 2C0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__block3">
          <p className="footer__copy">
            &#169;Slocan and Area Trail Society 2023
          </p>

          <p className="brand__text">
            Website:{" "}
            <Link className="brand__link">www.damonchouinard.ca</Link>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Footer;
