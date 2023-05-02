/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xlmax': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xlmax': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgmax': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdmax': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smmax': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      '2xlmin': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }

      'xlmin': {'min': '1279px'},
      // => @media (min-width: 1279px) { ... }

      'lgmin': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }

      'mdmin': {'min': '767px'},
      // => @media (min-width: 767px) { ... }

      'smmin': {'min': '639px'},
      // => @media (min-width: 639px) { ... }
    }
  },
  plugins: [],
}

