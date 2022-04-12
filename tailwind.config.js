module.exports = {
  mode: 'jit',
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#151515',
        'light-gray': '#2f2f2f',
        'light-pink': '#ff6584',
      },
      fontSize: {
        xs: '0.675rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
