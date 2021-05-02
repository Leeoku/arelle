// import { graphql, useStaticQuery, Link } from "gatsby";
import { Link } from "gatsby";
import React from "react";
// import logo from "../images/logo.png";
// import Logo from "../assets/logo-plain.svg"
import Logo from "../assets/logo-plain-2.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

var { SocialIcon } = require("react-social-icons");

function Header() {
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="bg-purple-200 h-1/6 text-black shadow-sm font-mono absolute w-full">
      <nav className="flex p-8 max-w-full justify-between items-center">
        <Link to="/">
          <Logo alt="Arelle Logo" className="flex h-32" />
        </Link>
        {/* <p className="flex text-xl font-bold place-self-center ml-8">
          {site.siteMetadata.title}
        </p> */}
        <div className="flex">
          {/* <div className="flex flex-wrap items-center justify-start h-32 max-w-full p-4 mx-auto md:p-8"></div> */}
          <div className="md:hidden">
            <svg
              className="w-6 h-6 items-center"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="md:block hidden">
            <AnchorLink className="px-4" href="#gallery">
              Gallery
            </AnchorLink>
            {/* <AnchorLink className="px-4" href="#testimonials">
              Testimonials
            </AnchorLink> */}
            <AnchorLink className="px-4" href="#about">
              About
            </AnchorLink>
            <SocialIcon
              url="https://www.instagram.com/arellepastries/?hl=en"
              style={{ height: 50, width: 50 }}
              bgColor="#1A1B1B"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
