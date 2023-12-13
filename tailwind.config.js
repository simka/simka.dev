const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{md,njk,html}", "./_includes/**/*.{md,njk,html}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontSize: {
      // https://utopia.fyi/type/calculator?c=320,18,1.333,1200,20,1.5,4,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,&g=s,l,xl,12 */
      sm: "clamp(0.8331rem, 0.8476rem + -0.0193vw, 0.8438rem)",
      base: "clamp(1.125rem, 1.0795rem + 0.2273vw, 1.25rem)",
      lg: "clamp(1.4994rem, 1.3628rem + 0.683vw, 1.875rem)",
      xl: "clamp(1.9988rem, 1.7028rem + 1.4795vw, 2.8125rem)",
      "2xl": "clamp(2.6644rem, 2.0991rem + 2.8261vw, 4.2188rem)",
      "3xl": "clamp(3.5519rem, 2.5423rem + 5.0477vw, 6.3281rem)",
    },
    spacing: {
      // https://utopia.fyi/space/calculator?c=320,18,1.333,1200,20,1.5,4,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,&g=s,l,xl,12
      "3xs": "clamp(0.3125rem, 0.3125rem + 0vw, 0.3125rem)",
      "2xs": "clamp(0.5625rem, 0.5398rem + 0.1136vw, 0.625rem)",
      xs: "clamp(0.875rem, 0.8523rem + 0.1136vw, 0.9375rem)",
      s: "clamp(1.125rem, 1.0795rem + 0.2273vw, 1.25rem)",
      m: "clamp(1.6875rem, 1.6193rem + 0.3409vw, 1.875rem)",
      l: "clamp(2.25rem, 2.1591rem + 0.4545vw, 2.5rem)",
      xl: "clamp(3.375rem, 3.2386rem + 0.6818vw, 3.75rem)",
      "2xl": "clamp(4.5rem, 4.3182rem + 0.9091vw, 5rem)",
      "3xl": "clamp(6.75rem, 6.4773rem + 1.3636vw, 7.5rem)",
      // One-up pairs
      "3xs-2xs": "clamp(0.3125rem, 0.1989rem + 0.5682vw, 0.625rem)",
      "2xs-xs": "clamp(0.5625rem, 0.4261rem + 0.6818vw, 0.9375rem)",
      "xs-s": "clamp(0.875rem, 0.7386rem + 0.6818vw, 1.25rem)",
      "s-m": "clamp(1.125rem, 0.8523rem + 1.3636vw, 1.875rem)",
      "m-l": "clamp(1.6875rem, 1.392rem + 1.4773vw, 2.5rem)",
      "l-xl": "clamp(2.25rem, 1.7045rem + 2.7273vw, 3.75rem)",
      "xl-2xl": "clamp(3.375rem, 2.7841rem + 2.9545vw, 5rem)",
      "2xl-3xl": "clamp(4.5rem, 3.4091rem + 5.4545vw, 7.5rem)",
    },
    extend: {},
  },
  plugins: [],
};
