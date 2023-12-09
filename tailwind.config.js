/** @type {import('tailwindcss').Config} */


module.exports = {
  theme: {
    extend: {
      colors: {
        "site-black": "#1F1D2B",
        "dim-white": "#E2E2E2",
        "site-pink": "#E8006F",
        "site-dim": "rgba(255, 255, 255, 0.02)",
        "site-dim2": "rgba(255, 255, 255, 0.13)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      fontSize: {
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
