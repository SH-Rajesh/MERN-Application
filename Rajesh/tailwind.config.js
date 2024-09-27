/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Define keyframes for glowing with random colors
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px 10px rgba(255, 0, 0, 0.5)' }, // Red
          '20%': { boxShadow: '0 0 20px 10px rgba(0, 255, 0, 0.5)' }, // Green
          '40%': { boxShadow: '0 0 20px 10px rgba(0, 0, 255, 0.5)' }, // Blue
          '60%': { boxShadow: '0 0 20px 10px rgba(255, 255, 0, 0.5)' }, // Yellow
          '80%': { boxShadow: '0 0 20px 10px rgba(0, 255, 255, 0.5)' }, // Cyan
        },
      },
      animation: {
        // Define the glow animation with a duration and infinite loop
        glow: 'glow 3s linear infinite',
      },
      fontFamily: {
        myriad: ['"myriad pro"', 'serif'], // Add Lucida Fax font family
      },
    },
  },
  plugins: [],
};
