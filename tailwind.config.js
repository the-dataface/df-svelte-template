const production = !process.env.ROLLUP_WATCH,
  plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    // other plugins here
  ],
  purge: {
    content: ["./src/**/*.svelte", "./src/*.html", "./public/index.html"],
    enabled: production,
  },
};
