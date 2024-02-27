import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import Navigation from "../../components/navigation/Navigation";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

import "./home.scss";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 699 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 899 });
  const isDesktop = useMediaQuery({ minWidth: 900, maxWidth: 2560 });

  return (
    <>
      <Navigation />
      <main className="container">
        <section className="hero">
          {isMobile && (
            <img
              src={images.homepageHeroMobile}
              alt="A computer screen displaying a website design"
            />
          )}
          {isTablet && (
            <img
              src={images.homepageHeroTablet}
              alt="A computer screen displaying a website design"
            />
          )}
          {isDesktop && (
            <img
              src={images.homepageHeroDesktop}
              alt="A computer screen displaying a website design"
            />
          )}
          <h1 className="hero__heading">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <a
            href="#about"
            className="hero__button button button-primary"
            aria-label="Jump to About Section"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12">
                <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
                  <path d="M0 9l8 4 8-4" />
                  <path opacity=".5" d="M0 5l8 4 8-4" />
                  <path opacity=".25" d="M0 1l8 4 8-4" />
                </g>
              </svg>
            </div>
            <span>About Me</span>
          </a>
        </section>
        <section className="about" id="about">
          {isMobile && (
            <img
              src={images.homepageProfileMobile}
              alt="Alex Spencer profile view"
              className="about__image"
            />
          )}
          {isTablet && (
            <img
              src={images.homepageProfileTablet}
              alt="Alex Spencer profile view"
              className="about__image"
            />
          )}
          {isDesktop && (
            <img
              src={images.homepageProfileDesktop}
              alt="Alex Spencer profile view"
              className="about__image"
            />
          )}
          <div className="about__content">
            <h2 className="about__heading">About Me</h2>
            <p className="about__body">
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>
            <Link
              to="/portfolio"
              className="about__button button button-secondary"
            >
              GO TO PORTFOLIO
            </Link>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
