/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'custom-pattern': 'radial-gradient(circle at 1px 1px, #DEDAD3 1px, transparent 0)',
          },
          backgroundSize: {
            '10': '10px 10px',
          },
          colors: {
            'custom-bg': '#F4F1EC',
          },
    },
  },
  plugins: [],
};
