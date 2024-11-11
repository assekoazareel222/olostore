/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'min-300': '300px',  // Point de départ à 300px
        'max-600': {'max': '600px'}, // Maximum à 600px
        'custom': {'max': '1948px', 'min': '1913px'},
        'custom2': {'max': '1913px', 'min': '1645px'},
        'custom3': {'max': '1654px', 'min': '1327px'},
        'custom4': {'max': '1326px', 'min': '1025px'},
        'custom5': {'max': '1030px', 'min': '600px'},
      },
    },
  },
  plugins: [],
};
