/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss"), require.resolve('prettier-plugin-astro')],
  singleQuote: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
