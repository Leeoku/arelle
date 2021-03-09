import { graphql, useStaticQuery, Link } from "gatsby";
// import { Link } from "gatsby";
import React, { useState } from "react";
// import logo from "../images/logo.png";
// import Logo from "../assets/logo-plain.svg"
import Logo from "../assets/logo-plain-2.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

var { SocialIcon } = require("react-social-icons");

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-purple-200 ">
      <div className="flex p-4">
        <Link to="/">
          <Logo alt="Arelle Logo" className="flex h-32" />
        </Link>
        <p className="flex text-xl font-bold place-self-center ml-8">
          {site.siteMetadata.title}
        </p>
        <div className="flex flex-wrap items-center justify-start h-32 max-w-full p-4 mx-auto md:p-8">
          {/* <div className="flex flex-wrap-reverse items-center justify-between max-w-4xl p-4 mx-auto md:p-8"></div> */}
          <Link to="/">
            {/* <h1 className="flex items-center text-white no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1> */}
          </Link>
          {/* <Link to="/"> */}
          {/* <Logo alt="Arelle Logo" className="flex h-1/2 w-auto " /> */}
          {/* <Link/> */}
          <button
            className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          {/* <span className="text-xl font-bold tracking-tight">
            {site.siteMetadata.title}
          </span> */}
          {/* <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav> */}
          <nav>
            {/* <div className="justify-start"> */}
            <AnchorLink className="px-4" href="#gallery">
              Gallery
            </AnchorLink>
            <AnchorLink className="px-4" href="#testimonials">
              Testimonials
            </AnchorLink>
            <AnchorLink className="px-4" href="#about">
              About
            </AnchorLink>
            <SocialIcon
              url="https://www.instagram.com/arellepastries/?hl=en"
              style={{ height: 50, width: 50 }}
              bgColor="#1A1B1B"
            />
            {/* </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
