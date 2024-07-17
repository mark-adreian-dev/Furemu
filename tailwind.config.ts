import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        "accent": "var(--accent)",
        "white": "var(--white)",
        "light-blue": "var(--light-blue)",
        "dark-blue": "var(--dark-blue)",
        "darker-blue": "var(--darker-blue)"

      },
      fontSize: {
        "nav-logo-text": "var(--nav-logo-text)",
        "card-title-desktop": "var(--card-title-desktop)",
        "hero-title-mobile": "var(--hero-title-mobile)"
      },
      lineHeight: {
        "badge-height": "var(--line-height-badge)" 
      }
    },
  },
  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: false,
    styled: false, 
    themeRoot: ""
  }
};
export default config;
