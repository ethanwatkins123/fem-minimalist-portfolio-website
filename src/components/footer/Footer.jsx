import { Link } from "react-router-dom";
import { images } from "../../constants/index";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bottomNav container">
        <div className="bottomNav__image-wrapper">
          <img
            className="bottomNav__image"
            src={images.logoLight}
            alt="Alex Spencer"
            width="60"
            height="32"
          />
        </div>
        <nav>
          <ul className="bottomNav__links">
            <li className="bottomNav__item">
              <Link className="bottomNav__link" to="/">
                HOME
              </Link>
            </li>
            <li className="bottomNav__item">
              <Link className="bottomNav__link" to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className="bottomNav__item">
              <Link className="bottomNav__link" to="">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bottomNav__socials">
          <a href="https://github.com/" target="_blank">
            <img src={images.github} alt="Github" width="24" height="24" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={images.twitter} alt="Twitter" width="24" height="24" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={images.linkedin} alt="LinkedIn" width="24" height="24" />
          </a>
        </div>
      </div>
    </footer>
  );
}
