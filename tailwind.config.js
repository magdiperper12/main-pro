/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      fontFamily: {
        'font-cairo': ['Cairo', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem', // Adjust as needed
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        // Add other sizes as needed
      },
          boxShadow: {
            'custom': '4px 4px 22px -4px #1B1F26B8',
          },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-rtl"),

  ],

};
