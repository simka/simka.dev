module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [ './hugo_stats.json' ],
		mode: 'all',
		options: {
			defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
			}
		}
	},
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
