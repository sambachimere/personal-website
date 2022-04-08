module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  // prefix: '',
  theme: {
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }

      md: '720px',
      // => @media (min-width: 768px) { ... }

      lg: '960px',
      // => @media (min-width: 992px) { ... }

      xl: '1140px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        night: '#1F2028',
        black: '#080706',
        dark: '#1D2144',
        primary: '#b89769',
        yellow: '#FBB040',
        grey: '#2e3039',
        'body-color': '#818890',
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        image: '0px 3px 30px rgba(9, 14, 52, 0.1)',
        pricing: '0px 34px 68px rgba(0, 0, 0, 0.06)',
        testimonial: '0px 8px 40px -10px rgba(9, 14, 52, 0.1)',
        service: '0px 11px 41px -11px rgba(9, 14, 52, 0.1)',
        blog: '0px 40px 150px -35px rgba(0, 0, 0, 0.05)',
      },
      zIndex: {
        '-1': -1,
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        mobile: '1.15rem',
        body: '1.3rem',
        title: '3rem',
        bigTitle: '4rem',
        subtitle: '2.3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
