import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="d-flex justify-content-end link">
      <div className="social-links">
        {" "}
        <FontAwesomeIcon icon={faFacebook} color="white" />
      </div>
      <div className="social-links">
        {" "}
        <FontAwesomeIcon icon={faInstagram} color="white" />
      </div>
      <div className="social-links">
        {" "}
        <FontAwesomeIcon icon={faTwitter} color="white" />
      </div>
    </div>
  );
};

export default Footer;
