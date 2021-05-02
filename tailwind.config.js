// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-img": "url('/static/images/hero.png)",
      }),
      height: {
        "4/5-screen": "80vh",
      },
      maxHeight: {
        "4/5-screen": "80vh",
      },
    },
  },
};
