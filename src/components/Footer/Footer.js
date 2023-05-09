import { Link } from "react-router-dom";
// import DownloadPdf from "../DownloadPdf/DownloadPdf";
// import github from "../../assets/icons/icons8-github-logo-24.png";
import instagram from "../../assets/icons/instagram-f-svgrepo-com.svg";
import envelope from "../../assets/icons/envelope-solid.svg";
import { FiChevronsUp } from "react-icons/fi";
import "./Footer.scss";
import { forwardRef, useRef } from "react";

const Footer = forwardRef(({ aboutSectionRef, newsSectionRef }, ref) => {
  const handleHeaderLinkClick = (e) => {
    e.preventDefault();
    const footer = document.getElementsByClassName("nav__section")[0];
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="footer__section">
      <div className="footer__limit">
        <div className="footer__scrollto--top">
          <span className="current__feature" />
          return to top
          <FiChevronsUp className="chevron" size={30} color="#D4A373" />
          <span className="current__feature" />
        </div>
        <div className="footer__containerA">
          <div className="menu__block">
            <ul className="menu__list">
              <li className="menu__listItem">
                <Link className="menu__item--link">About</Link>
              </li>
              <li className="menu__listItem">
                <Link className="menu__item--link">News</Link>
              </li>
              <li className="menu__listItem">
                <Link className="menu__item--link">Trails</Link>
              </li>
              <li className="menu__listItem">
                <Link className="menu__item--link">Membership</Link>
              </li>
              <li className="menu__listItem">
                <Link className="menu__item--link">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__containerB">
          <div className="footer__block1">
            <Link to="" className="footer__link">
              <div className="footer__icon-block">
                <img src={instagram} alt="inst icon" className="footer__icon" />
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

            <p className="footer__copy">
              &#169;Slocan and Area Trail Society 2023
            </p>
          </div>
          <p className="brand__text">
            Website:Damon Chouinard -{" "}
            <Link className="brand__link">www.damonchouinard.ca</Link>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Footer;
