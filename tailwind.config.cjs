const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "brand-soft-blue": "hsl(215, 51%, 70%)",
        "brand-cyan": "hsl(178, 100%, 50%)",
        "brand-very-dark-blue-main": "hsl(217, 54%, 11%)",
        "brand-very-dark-blue-card": "hsl(216, 50%, 16%)",
        "brand-very-dark-blue-line": "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      }
    },
  },

  plugins: [],
};

module.exports = config;
