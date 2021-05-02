import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import Hero from "../components/Hero"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      {/* <section id="hero" className="h-screen">
        <Hero />
      </section> */}
      <section id="gallery" className="h-screen">
        <div>
          <h2>Gallery Stuff</h2>
        </div>
      </section>
      <section id="about">
        <div>
          <h2>About Stuff</h2>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
