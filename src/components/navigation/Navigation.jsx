import { Link } from "react-router-dom";
import { useState } from "react";
import { images } from "../../constants/index";
import "./navigation.scss";

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <header className="topnav container">
        <div className="topnav__image-wrapper">
          <img src={images.logo} alt="Alex Spencer" width="60" height="32" />
        </div>

        <nav>
          <span id="nav-label" hidden>
            Navigation
          </span>
          <button
            className="topnav__open"
            aria-expanded={isExpanded}
            aria-labelledby="nav-label"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <img src={images.hamburger} alt="" width="24" height="13" />
          </button>
          <div
            className="topnav__menu"
            role="dialog"
            aria-labelledby="nav-label"
          >
            <button
              className="topnav__close"
              id="btnClose"
              aria-label="Close"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <img src={images.close} alt="" width="18" height="19" />
            </button>
            <ul className="topnav__links">
              <li className="topnav__item">
                <Link to="/" className="topnav__link">
                  HOME
                </Link>
              </li>
              <li className="topnav__item">
                <Link to="/portfolio" className="topnav__link">
                  PORTFOLIO
                </Link>
              </li>
              <li className="topnav__item">
                <a href="#" className="topnav__link">
                  CONTACT ME
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
