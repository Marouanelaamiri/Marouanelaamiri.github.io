/**
 * Shared Tailwind configuration.
 *
 * Performance change: this replaces the three per-page Play CDN configs so
 * Tailwind can be compiled once during development instead of in each visitor's
 * browser.
 */
module.exports = {
  content: ['./index.html', './about.html', './projects.html'],
  theme: {
    extend: {
      colors: {
        dark: '#0c001f',
        primary: '#6c42d3',
        secondary: '#b0a8d1',
        nav: '#1a013d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
