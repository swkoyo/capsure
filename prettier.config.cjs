/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  useTabs: false,
  singleQuote: true,
  tabWidth: 2,
};

module.exports = config;
