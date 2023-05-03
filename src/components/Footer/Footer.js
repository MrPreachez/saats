import { Link } from "react-router-dom";
// import DownloadPdf from "../DownloadPdf/DownloadPdf";
// import github from "../../assets/icons/icons8-github-logo-24.png";
import instagram from "../../assets/icons/instagram-f-svgrepo-com.svg";
import envelope from "../../assets/icons/envelope-solid.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__container">
        <div className="footer__block1">
          <Link to=" " className="footer__link">
            <div className="footer__icon-block">
              
              <p className="footer__member-text">Become a Member</p>
            </div>
          </Link>
          <Link
            to=""
            className="footer__link"
          >
            <div className="footer__icon-block">
              <img src={instagram} alt="inst icon" className="footer__icon" />
              <p>Instagram</p>
            </div>
          </Link>
          <Link className="footer__email--link footer__link" to="/contact">
            <div className="footer__icon-block">
              <img
                src={envelope}
                alt="envelope icon"
                className="footer__email-icon footer__icon"
              />
              <p>Email</p>
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
      </div>
    </div>
  );
}

export default Footer;
