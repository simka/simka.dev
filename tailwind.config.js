module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        'print': {'raw': 'print'},
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      },
      gridTemplateRows: {
        "1-auto": "repeat(1, auto)",
        "2-auto": "repeat(2, auto)",
        "3-auto": "repeat(3, auto)",
        "4-auto": "repeat(4, auto)",
        "5-auto": "repeat(5, auto)",
        "6-auto": "repeat(6, auto)",
      },
    },
  },
  variants: {},
  plugins: [],
};
