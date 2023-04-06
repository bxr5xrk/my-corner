module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    fontFamily: {
      fira: ['Fira Code', 'monospace'],
    },

    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'bg-color': 'var(--bg-color)',
        default: 'var(--text-color)',
        // primary: 'rgb(var(--primary-color) / <alpha-value>)',
        // secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
