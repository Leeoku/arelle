import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CatAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import Hero from "../components/Hero"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section id="hero" className="h-80">
        <Hero />
      </section>
      <section id="gallery" className="h-80">
        <div>
          <h2>Gallery Stuff</h2>
        </div>
      </section>

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={CatAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-red-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>
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
