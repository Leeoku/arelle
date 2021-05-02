import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Hero from "../components/Hero";
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-red-900">
      <div>
        <Header />
        <section
          id="hero"
          className="flex-center"
        >
          <Hero />
        </section>
      </div>
      <main className="flex-auto">
        {/* <main className="flex-auto w-screen max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16"></main> */}
        {/* <Hero /> */}
        {children}
      </main>

      {/* <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kenneth Lee
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
