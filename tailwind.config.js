/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mbs': '320px',
      //  => @media (min-width: 320px) { ... }

      'mbm': '360px',
      //  => @media (min-width: 360px) { ... }
      
      'mbl': '480px',
      // => @media (min-width: 480px) { ... }

      'tabs': '600px',
      // => @media (min-width: 600px) { ... }

      'tabl': '768px',
      // => @media (min-width: 768px) { ... }

      'laps': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lapm': '1220px',
      // => @media (min-width: 1220px) { ... }

      'lapl': '1440px',
      // => @media (min-width: 1440px) { ... }

      'lapXL': '1620px',
      // => @media (min-width: 1440px) { ... }

      'desk': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [],
}

